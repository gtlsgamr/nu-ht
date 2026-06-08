// Build-time social-card renderer.
//
// We hand-build an SVG with real <text> elements and let resvg (rustybuzz)
// shape + rasterise it. This is deliberately NOT Satori: Satori converts text
// to paths with only basic shaping, which garbles complex scripts — Devanagari
// matra reordering, Gujarati conjuncts, etc. resvg shapes correctly, so the
// Hindi/Gujarati poem titles render properly. Layout is simple enough (a few
// lines at fixed positions) that we don't need Satori's flexbox.
import { Resvg } from "@resvg/resvg-js";
import { join } from "node:path";

const FONT_DIR = join(process.cwd(), "fonts");
const FONT_FILES = [
  join(FONT_DIR, "Fraunces-static.ttf"),
  join(FONT_DIR, "NotoSansDevanagari-static.ttf"),
  join(FONT_DIR, "NotoSansGujarati-static.ttf"),
];

// Palette mirrors the site (parchment paper on a slate background, ink borders).
const C = {
  slate: "#C3CDD6",
  paper: "#EAE1CC",
  ink: "#23282F",
  muted: "#575d66",
  accent: "#5B7C99",
};
const FAMILY = "Fraunces";

// Pick the PRIMARY font family by script. resvg's glyph-level fallback does not
// reliably re-shape complex scripts (Devanagari matra reordering etc.), so a
// Hindi/Gujarati title must use its Noto font as the primary family, not lean
// on Fraunces → fallback.
function pickFamily(text: string): string {
  if (/[ऀ-ॿ]/.test(text ?? "")) return "Noto Sans Devanagari";
  if (/[઀-૿]/.test(text ?? "")) return "Noto Sans Gujarati";
  return FAMILY;
}

function esc(s: string) {
  return (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Word-wrap on spaces only (so we never split a Devanagari/Gujarati cluster).
// Approximate width using an average advance ratio — good enough for layout.
function wrap(text: string, fontSize: number, maxWidth: number, maxLines: number) {
  const words = (text ?? "").trim().split(/\s+/).filter(Boolean);
  const perChar = fontSize * 0.52;
  const maxChars = Math.max(8, Math.floor(maxWidth / perChar));
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const candidate = line ? `${line} ${w}` : w;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = w;
      if (lines.length === maxLines) break;
    } else {
      line = candidate;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  // ellipsis if we ran out of room
  if (lines.length === maxLines) {
    const used = lines.join(" ").length;
    if (used < (text ?? "").trim().length) {
      lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, "") + " …";
    }
  }
  return lines.length ? lines : [""];
}

function fmtDate(date?: string) {
  if (!date) return "hitarththummar.xyz";
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export interface OgOptions {
  title: string;
  description?: string;
  label?: string;
  date?: string;
}

function svg({ title, description, label, date }: OgOptions): string {
  const CONTENT_LEFT = 100;
  const CONTENT_RIGHT = 1100;
  const CONTENT_WIDTH = CONTENT_RIGHT - CONTENT_LEFT;

  const titleSize = (title ?? "").length > 34 ? 54 : 66;
  const titleLines = wrap(title ?? "", titleSize, CONTENT_WIDTH, 2);
  const titleLH = Math.round(titleSize * 1.16);

  const descLines = description ? wrap(description, 30, CONTENT_WIDTH, 2) : [];

  const titleFamily = pickFamily(title ?? "");
  const descFamily = pickFamily(description ?? "");

  // Vertical flow from a fixed title top so 1- and 2-line titles both look right.
  let y = 268;
  const titleTspans = titleLines
    .map((ln, i) => `<tspan x="${CONTENT_LEFT}" y="${y + i * titleLH}">${esc(ln)}</tspan>`)
    .join("");
  let descY = y + (titleLines.length - 1) * titleLH + 64;
  const descTspans = descLines
    .map((ln, i) => `<tspan x="${CONTENT_LEFT}" y="${descY + i * 42}">${esc(ln)}</tspan>`)
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${C.slate}"/>
  <rect x="36" y="36" width="1128" height="558" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>
  <text font-family="${FAMILY}" font-size="26" letter-spacing="3" fill="${C.accent}" x="${CONTENT_LEFT}" y="148">${esc((label ?? "").toUpperCase())}</text>
  <text font-family="${titleFamily}" font-size="${titleSize}" fill="${C.ink}">${titleTspans}</text>
  <text font-family="${descFamily}" font-size="30" fill="${C.muted}">${descTspans}</text>
  <text font-family="${FAMILY}" font-size="26" fill="${C.ink}" x="${CONTENT_LEFT}" y="552">Hitarth Thummar</text>
  <text font-family="${FAMILY}" font-size="26" fill="${C.muted}" x="${CONTENT_RIGHT}" y="552" text-anchor="end">${esc(fmtDate(date))}</text>
</svg>`;
}

export async function renderOg(opts: OgOptions): Promise<Buffer> {
  const resvg = new Resvg(svg(opts), {
    fitTo: { mode: "width", value: 1200 },
    font: {
      fontFiles: FONT_FILES,
      loadSystemFonts: false,
      defaultFontFamily: FAMILY,
    },
  });
  return resvg.render().asPng();
}
