---
title: "SAP Basis beginner notes"
description: "Digitized notes for a rookie SAP Basis consultant use."
date: "2023-08-20"
---

The below notes were hand written by a collegue and I digitized them for public use. These are especially useful for beginner SAP Basis consultants looking for a quick cheatsheet. Keep in mind, I am not responsible for any broken production systems if you mess up. The below content is provided on as-is basis.

You will find many mistakes because the typing may have been wrong/misinformed, if possible please e-mail me with corrections and I will update them here.

Enjoy.

---

## Tcodes

| Sr.No | Transaction Code                | Description                                                                          |
| ----- | ------------------------------- | ------------------------------------------------------------------------------------ |
| 1     | SM50                            | Work process specific for a particular instance (central) (local wlp overview)       |
| 2     | SM66                            | For additional instance (basically all inst) (global wo/p overview)                  |
| 3     | SM04                            | To check wether instance is active or not (users which are not physically logged in) |
| 4     | AL08                            | For global users login (active users)                                                |
| 5     | SM12                            | Lock management / system lock overview                                               |
| 6     | SM13                            | Update management                                                                    |
| 7     | SM14                            | Activate / Deactivate the Update prog add                                            |
| 8     | RZ10                            | Static parameter profile param maintan                                               |
| 9     | RZ11                            | Dynamic parameter / display profile parameter                                        |
| 10    | SU01                            | Create a single user                                                                 |
| 11    | SU10                            | Create multiple users                                                                |
| 12    | PECG                            | Create role & profiles                                                               |
| 13    | SE16                            | To view any table                                                                    |
| 14    | USE02                           | Table of users                                                                       |
| 15    | SUIM                            | Security purpose, User information system.                                           |
| 16    | SE11                            | Maintaining metadata, data dictionary                                                |
| 17    | SU21                            | All authorisation object in SAP                                                      |
| 18    | SU24                            | To check any authorisation object in nodes                                           |
| 19    | SU53                            | You are assigned to some authorisation or not / missing authorisation                |
| 20    | SE93                            | To check which prog is running in bg                                                 |
| 21    | SE38                            | To execute this program (ABAP Editor)                                                |
| 22    | SM371, SM39                     | To know active background jobs overview                                              |
| 23    | SM36                            | Scheduling (define) background process (job)                                         |
| 24    | SM51                            | Kernel version (list of all application server)                                      |
| 25    | ST04                            | Analyse database                                                                     |
| 26    | DB13                            | Schedule the database backup (offline)                                               |
| 27    | EWZ5                            | Lock all users                                                                       |
| 28    | SM02                            | To send message to customer                                                          |
| 29    | SCC4                            | To (create client) check how many clients are there                                  |
| 30    | SCCL                            | Local client copy                                                                    |
| 31    | SCC3                            | Client lock analysis                                                                 |
| 32    | SCC5                            | Client deletion                                                                      |
| 33    | SCC9                            | Remote client copy                                                                   |
| 34    | SCC7                            | Client import                                                                        |
| 35    | SCC8                            | Client export                                                                        |
| 36    | SMLT                            | To know the language in your SAP system                                              |
| 37    | SICK                            | After installation run the system & check for errors                                 |
| 38    | BD54                            | Creating logical name                                                                |
| 39    | BTCtrans1                       | Suspend the background job                                                           |
| 40    | BTCtrans32                      | Resume the background job                                                            |
| 41    | SM49                            | Maintain the external OS commands                                                    |
| 42    | SM69                            | To execute the external OS commands                                                  |
| 43    | SM62                            | To event history overview                                                            |
| 44    | SM64                            | Release of events                                                                    |
| 45    | RZ04                            | Maintain the operation modes                                                         |
| 46    | SM63                            | Timeset for operation mode                                                           |
| 47    | SPAD                            | Spool Administration / To define the olp devices                                     |
| 48    | SP01                            | Output Controller / Spool request selection screen                                   |
| 49    | SP02                            | List of spool request                                                                |
| 50    | SP11                            | Temp sequential object request screen                                                |
| 51    | SP12                            | Temse Administration                                                                 |
| 52    | SM301                           | Lock / Unlock Tcodes                                                                 |
| 53    | SMGW                            | Gateway work process overview                                                        |
| 54    | SMMS                            | Message server overview                                                              |
| 55    | SMICM                           | ICM Monitoring (Internet Comm Manage)                                                |
| 56    | SUPC                            | Mass profile creation                                                                |
| 57    | SUGR                            | User group creation                                                                  |
| 58    | PFUD                            | Compare user assignments                                                             |
| 59    | SU56                            | User buffer                                                                          |
| 60    | SU02                            | Maintain authorisation profile                                                       |
| 61    | SE54                            | Create the authorization group                                                       |
|       | **Transport Management System** |
|       |                                 |
| 62    | STMS                            | To configure TMS                                                                     |
| 63    | SE01                            | Transport organizer                                                                  |
| 64    | SE03                            | Transport organizer tool                                                             |
| 65    | SE06                            | Change transport system                                                              |
| 66    | SE09                            | Workbench request                                                                    |
| 67    | SE10                            | Customizing request                                                                  |
| 68    | TSTC                            | To seek all transaction code                                                         |
| 69    | ST01                            | All missing authorization                                                            |
| 70    | SM59                            | RFC Administration                                                                   |
| 71    | SMLG                            | Creating logon group                                                                 |
| 72    | SAINT                           | Applying Addons                                                                      |
| 73    | SPAM                            | Support Package Manager                                                              |
| 74    | SALE                            | To create logical client                                                             |
| 75    | STZAC                           | Timezone setting                                                                     |
| 76    | ST22                            | ABAP Dump                                                                            |
| 77    | TZCUSTHELP(Table)               | For timezone                                                                         |
| 78    | SM21                            | Check / display system logs                                                          |
| 79    | ST17                            | To check error log files                                                             |

---

## _3 Layers:-_

1. Presentation
2. Application
3. Database (SQL Processes)

## Work processes of ABAP

1. Spool ---> For printing purpose
2. Update ---> Make update in the database if any
3. Dialog ---> It is like interface, eg (GUI) SAP logon
4. Background ---> Run job/processes in background
5. Enque (for lockup) ---> Lock the processes

---

## ABAP Architecture

- Application layer provides environment to run processes
- Request will be one of the 5 processes
- Message server knows how many instance are there
- Dispatcher knows how many free instance are there

---

## Sequence for ABAP System

## Starting

1. Database
2. Central Services
3. Central Instances

- All instances can be identified by unique instance number. CS --> 01, CI -- 00, (ASCS) --> ABAP, (SCS) --> Java
- 100 instances we can have at most
- SID (System ID ) ---> Should be 3 letters, should not start with digit & no special characters, uppercase letters only
- /usr/sap/< sid > ---> Log files, config files, executable files (kernel), temporary files.
- sapmnt / < sid > /
  (global directory)
- Files of IP address of all additional application instances for a particular system
- Security files, gateway files, authentical files.
- To go from one transaction to another

  /n:- Close this open new

  /o:- Keeps the other open to

---

## Profiles (Configuration Files)

- Parameters needed to start an SAP system

  1. default ---> resource allocation
  2. instance ---> parameters used by specific instance
     - Central Service Profile
     - Central Instance Profile
     - Additional Instance Profile

- Each instance has its own config so separate instance profiles
- When we open system first default, then central service
- If any change is default profile, sys needs to be restarted

---

## Transactions

- Whatever functionality needs to be used in SAP ABAP system they are taken care of transaction codes
- Required media
  - Kernel
  - GUI
  - Database

## Shared Lock

- SSFS:- Secured store of file system
- Data file:- Stores name & password creations, to connect and fetch
- Key file:- Stores special key associated with database credentials. Different key values for db
- SAP Fiori:- Provides modern web based UI

- **Role**:- Every transcation has an authorization object & collection of objects is called Role

Collection of such roles is called Profile containing details of authorization object for particular use

- Profiles generated by SAP eg. SAP_ALL, SAP_CUST

App Server: 10.17.232.13
Instance No: 00
SID: TR5

    User -- ILPBASIS11
    Password -- Abc@123

- If user type is system of dialog then only we can login using SAP GUI
  SNC = Secured W/W Communication

---

- **Roles**

  1. **Single**

     - **Master (Parent)**
     - **Derived**

  2. **Composite**

## Menu Tab in Roles

- Which transaction needs to be assign to that Role.

- **Authorization:-** Authorization object & organization level details

- When create role a new profile will be generated 1 profile attached to 1 role. User can be attached to role or profile

- **Update:-** Will update tables in database

  - U1 ---> Critical update
  - U2 ---> Less critical

- **Gateway:-** Allows to communicate between application server to administration server

---

## HANA

- in-memory databse
- HANA is not only a database, its a suite of application software

- **HANA Components:-**
  1. Database
  2. Client
  3. Studio
  4. Lumina
  5. AFL
  6. SLT
  7. SDS
  8. SDI

## BACKUP

- Copying entire system

1. Database
2. Filesystem (img backup)

- In SAP we have separate space for storing backup, generally thrice original space.
- Frequency of data depends on criticality of data.
- Path of location
- Removal of old backup

## Backups

- HANA Studio - Gives a GUI to allow you to do things at OS level with logging to Linux server
  Admin, monitoring, maintain, update needed.

- SLT (SAP's Linear Transformation)
- Realtime /Simultaneous replication/High Availability

## Disaster Recovery (Replication)

- Primary: The one cue are working
- Secondary - The one with realtime replication and same geographical area
- Tertiary - Realtime replication in different area. In case of networks, server failure, its useful.

## SDS - Smart Data Streaming

Majorly used for image/video processing

- Non-standard part of HANA
- Works on concept of AI
- Realtime streaming of data
- Installed explicitly

## SDI - Smart Data Integration

- Separately stored procedures & written
- Only arithmetic/mathematical calculations

## HANA DATABASE

### Architecture

- Entire HANA in C++ so C++ compiles JCC files
- Index server is heart of system, basically data storing, data persistence, handling of queries
- statistic server is user, memory, processes info
- Name server stores metadata, stores system server information
- A merge brings data from persistance to index server

### HANA DB version

- Check whether db is up and running
  sapcontrol -nr 02 -function GetProcessList

- DB2 and oracle dont work on instance no. functionality

- Red, grey, yellow, green colour code for HANA processes

- To check connection between app and DB: R3 trans-d

- Check filesystem : `df -h`
- Copy: `cp`
- Make directory: `mkdir`
- Change mode: `chmod`
- Change owner: `chown`
- extension files: .SAR

- Extract .SAR: `SAPCAR -xvf <filename>.SAR -R <destination path>`

## Linux

To be added later

## Kernel update

### prerequisites

- DB/FS backup
- version of kernel
- Approval
- Plan downtime
- Space Availability check
- SM02 (to send msg to customer)
- Download required patch
- backup of exe folder
  exe folder path - sapmnt/< sid> (only kernel files)
  sar files
- lock all user [EWZ5] on SAP GUI backup
  cp -Rp systemname
  (linux x86_64/install/ )
  extract root doesnt have access to extract files
- copy downloaded file of exe location

### Upgrade steps

To be added later

## Create user

- [SU01] -> Enter Lname and set password
  default users are ddic and sapstar user
- [SU10] -> for creating mass user
- i) startup profile, ii) default profile, iii) instance profile when 0 sapstar is allowed
- After 1st installation by default 3 clients are there
  000 001, 066 (SAP Clients)    
  000 - Main activity, end users cant work on these 3 clients    
  066 - ewa/generate report about bg     
  001 - copy of 000    

- Any activity that end user wants to do are will create separate client till 1000 (999)

- logical system is necessary for each client
  Switch user in HANA DB - su - <sid>adm

- TOOO - table that stores client data
  snote - small correction, apply the notes
  support pckg - large scale correction, spam
- Schema user is used to connect ABAP user to DB

- RFC - Remote function call

## Profiles

- SAP_ALL - all client specific data without change document
- SAP_APPL - customizing app data without change document
- SAP_APPX - SAP_APPL without authorization profile and roles
- SAP_CUST - customizing data
- SAP_CUSV - customizing and user variant
- SAP_CUSX - customizing without authorization profile and roles
- SAP_PROF - only authorization profile and roles
- SAP_UCSV - customizing user master record and user variants
- SAP_UCUS - customizing and user master record
- SAP_UONL - user without authorization profile and roles
- SAP_USEr - user master record and authorization profile

### Prerequisites for client copy

- send msg to user using [SM02]
- check which users are logged on in the application server using [SM04]
- if logged on then lock particular user [EWZ5] lock all
- check if any background process is running using [SM37 then it needs to be suspended
- In [SE38] run Tcode[BTCtrans1] to suspend the jobs [BTCtrans2] to resume suspended jobs

### RFC administration

- 4 types of Remote Function call (RFC)    
  a) Synchronous - Both the system should be active    
  b) Asynchronous - Not wait for result from target system    
  c) Transactional - if system is available we'll get result else not    
  d) Queued - RFC will form a queue    
  e) Background - merged transactional and queued rfc    

### Types of users

1. dialog 
2. system 
3. communication 
4. reference 
5. service

- Transport domain: DOMAIN_SID
- Domain Controller is used to manage all SAP system in some landscape
- Transport is used to move object frmo one SAP system to other system within same landscape
  DEV -> QAS -> PRD

STMS -> overview in SAP system -> virtual system -> SAP system -> create -> sid -> distription -> save

- During STMS, tms adm user is created and changes done are stored in domain.cfg file

/usr/sap/trans/bin/domain.cfg at OS level

- If name starts with SAP then that is standard layer otherwise that is customize layer

- 3 Types of routes are consolidated integrated and delivery

DEV -> QAS -> PRD    
consolidated delivery

- /usr/sap/trans/bin which contains information of STMS and profile parameter of transport request.

- TP_DOMAIN<sid> - transport request parameter

- cofiles contain control info of transport request. that start with K

- Datafiles contains actual info of transport request. That start with R

- Path for both the file is /usr/sap/trans/cofiles (OR) /usr/sap/trans/datafiles
- Transport request naming: <sid> Kg <5 digit no>

- For single system there is no transport route

## Types of Transport request

- Customizing request - it contain client specific obj data. Importing this will no affect all clients only a particular client.
- Workbench request - It contains cross client object and repository obj data. It affects all clients in the system. Changes done in development system is stored in repository.
- Transport of copies - It contains the more table data and is used for client refresh and database refresh
- Relocation - It is used for changing the location of one object from one sap system to another

- Whatever you change data in development system is stored in repository
- Transport target group if more than 3 system or multiple clients are present
- it works on extended domain controller used to transport the object within the same client and same system
- After config check connection
  SAP System -> check -> connection
- Variant is the input given to the program
- STMS import - find all the request queued extras -> other requests -> add
- Schedule - You have define the program name and variant but you have not define start conditions like start date and time
- Reloaded - All the required criteria are fulfilled for the job definition. Start condition must be define for the job in the release status
- Ready - All required conditions are may to run the job in bg, but the job scheduler has to put job in a queuem because it is waiting for the bg workprocesses to be free
- Active - job has started running in the bg, we cant change the status of the job when that are active
- Finish - job is executed successfully. It means task completed without an error
- Cancelled - there are 2 possibilities for this:
  a) Administrator may stop it forcefully
  b) issue in job

- Start condition for BG job

1. date/time
2. immediate
3. after job
4. after event
5. An operation mode (provide time period)

## Before installation

- check which solution of SAP system we need to install
- check which DB we need to install
- check database and SAP system solution for particular system
- check RAM size, storage, CPUs and OS version

- To install the SAP system below software is required:
  a) Windows/Linux server
  b) DB software
  c) BAR R/3 SAP kernel CD
  d) Export CDs
  e) FS and require directory should be created on win/linux server

R/3 installation - DB -> DB install (HANA/ASE/Oracle) - Application -> (CS/DB/CI)

## S/W of solution (ECC6.0) which we are going to install

- kernel file
- DB (Oracle)
- Installation upgrade for language
- SWPM (Software package manager)

First we install CS then DB and lastly CI

Run SWPM
sapinst -> Find out SAP ERP version frmo kernel dump
SAP ERP 6.0 EhP6
6.0 - ECC, EhP6 - Enhancement package

SAP Business Suite = {CRM, SCM, ERP}

## 2 ways to install SAP

- Central instance - DB and app on same system
- Distributed instance - DB and app are on different system

Select CI -> Software provisioning Manager -> define parameter -> parameter mode -> typical -> it will take 00 as default installation -> Custom -> OK

- In software provisioning manager -> maintain FQDM -> then set password -> then choose local installation (if db and s/w are in single system)

## Kernel Upgrade process flow:

- Download the files: SAPEXE/SAPEXEDB
- Copy/Move to application server
- Extract files
- Stop application
- Kill supstartsrv process
- Take backup of kernel directory
- Copy/Move previously extracted kernel files to the actual kernel dir
- Correct ownership of some exe files with `./saproot.sh <SID>` as root.
- Switch to <sidadm> user and test the database connectivity with `Rstrans -d`
- Start application

- Kernel directory: /sapmnt/<sid>/exe/uc/linux86_64

- Instance directory: /454/sap/<sid>/sys/global

- Global dir getting files frmo: /sapmnt/<sid>/global

- Keep your extracted kernel files into /sapmnt directory

## SAP JAVA: Server Administration

- http://hec03v0233460.sh.hec.sap.biz:50000/startpage
  hec03v0233460 - server, sh.hec.sap.biz - FQDN, 50000 - port number
- SAP netweaver administrator (no client concept in java system)
- Credentials

- To create roles go to identity management -> create user -> fill in info (name, pass, group)

- 001 client contain some info about java system (user)

- 7.1X and above central instance became primary application server instance and dialog instance became add app server which contains application server instance + central instance

## Errors in TMS:

- Why ASE is more stable than HANA?
- Latest version of ASE: 16.0

- SAP never allowed you to downgrade support pcick or DISDC files downgrade compatible

- using SUM you can upgrade all components at any time
- using SPAM you can upgrade only 1 component at a time

- ABAP support pack upgrade one by one
- Java support pack upgrade directly

- SOLMAN -> managing solution - 7.2 (monitoring different SAP solution)

SOLMAN as a whole central console

- What is system refresh? Copy a SAP system to another
- Latest HANA version? 2.0.23
- Return Codes?

- SNOTE: small correction apply on notes
- Patch: upgrade version of SAP system
- Maintanence planner tool to make XML/generate file
- Stock file contains all the updates which we need to change

Stackfile is actual data of particular sid while XML is just data

- Addon are the additional features in already installed system.

## Modern DB platform

- SAP HANA is the MDP
- Data will store in CRM and ERP
- OperationalData Store - This will take required data from CRM and ERP
- Traditional approach is used before HANA came
- Transactional process - It works with analysis part
- ETL (Extraction, ransformation, loading)

## Summarize data

- Data model - Summarize data will store in data model
- Indices - it is index and start with 0
- Aggregates - It stored periodically used data
- Data warehouse - Collection of multiple databases and stored data for a long time
- Data mart: specific set of data (eg. HR/Finance data)
- Analysis: Analyze the inventory (eg. which product is used more)
- Inmemory data are faster
- HANA is a tool which is used as developing platform
- In HANA no need to summarize the data that whole process is done in modern enterprise platform
- Example: ILP
- HANA is efficient, flexible and not time consuming
- Data footprint is the space acquired by the data whether it is deleted or available

## Policies of HANA

- SAP HANA Support Pack stack: Released every 6 months and is a set of components

- SAP HANA support package revision - only few components will update (3 months)

- SAP HANA system varified revision - After applying support pack stack it will release every 3 months

- SAP HANA maintainence revisions - released every 2 months

## Components of HANA

- Hash - Environment in which HANA is stored with all info
- System: Identify by ID (SID). It needs OS
- Instance: Host -> it has storage, local dir. We can access system via host

- Data volume

- Hypervisor

- Root directory
  HANA STUDIO data will be stored in /hana/shared/sid/hdbclient, /hana/shared/sid/hdbstudio

- /usr/sap -> local files

- Actual data and log data will be stored respectively: hana/data/sid, hana/log/sid

- To get log file/dir with timestamp: `ls -lah`

- Save point consists of latest update of data/recent change

/ERROR := display/give the error in logfile
/parametername := It will display that parameter

- Monitor and handle wakprocess is done by web dispature

- Virtualip list - It is gives configured virtual L10s

## HANA Commands

- To check if the database is running on the server: `sapcontrol -n 02 -function GetProcessList`
  02 - instance no.

- Stop HANA DB: HDB stop
- Start HANA DB: HDB Start
- Show a status of sapcontrol: watch <sapcontrol>
- logs of file: cdtrace
- To see the user are there: hdbuserstore list
- Change the key of particular user: hdbuserstore set <key> <end> <user> <password>
- To login into the user: hdbsql -u
- version of HANA DB: HDB version

## Apply License

- Go to SLicense -> Install License -> Find Notepad and fill details

[SM51] - Find kernel version

## RFC Connection types

Connection - Type
ABAP - 3
HTTP to external server - G
HTTP to ABAP system - H
Internal connections - I
Logical connections - L
TCP/IP connections - T
Connection via ABAP driver - X

## RFC Connection

RFC connection -> Destination -> Administration -> Technical setting (gateway host and IP) -> Logon & security (provide user)

- To update request type TCODE [SM13]

Administration -> Update -> server (eg. critical and less critical) -> Parameters

- We can deactivate this TCODE

## System lock management

- To check which user is logged in the particular table enter TCODE SM12 -> enter table name -> lock that user (if you want to use that table)

- To check logs we have ST22 and SM21 at time of error

- How to troubleshoot when SAP goes down: /usr/sap/<sid>/<ins.no.>/logfiles/<files> (you can get error in that logfiles)

## SUM - Software Upgrade manager

- XML
- Patches
- SUM Files (SAR)

- All the files must be in a single folder
- To generate the stack files maintanence planner (download this file)
- It requires superuser and password

## Maintenance planner

- ABAP (Provide SID)
- JAVA

- You need to give OS version/name, addons, SP level, net viewer version, kernel version, SP GUI version
- Generate XML (put in download basket)
- Download patches (put in download basket)
- Download SUM fill (put it in installation location) (server) (all files should be in single folder)
- Change mode of SUM file and also give sidadm permission:
  chmod 777 <filename>, chown <sidadm>:sapsys <filename>
- Extract SAR files -> SUM Folder `SAPCAR -XVF <filename>`
- Run startup file using /startup config hostagent <sid>
- Run the SUM

- it will provide link for ABAP SUM upgrade.
- Select link and run it in browser
- You need to give sidadm and password
- it will ask you for the XML file
  (File location:install/../stack.xml)
- it will lock your system in execute step
- If you want to unlock the system at the time of execution phase:
  a) go to SUM folder with `cd SUM/ABAP/exe`
  b) run `tp unlocksys <SAPSID>pf = ..\var\DEFAULT.TPP`
  c) run `tp unlock_e4 <SAPSID>pf = ..\var\DEFAULT.TPP`

- If you want to upgrade single component use SPAM

## Prerequisites for support package implementation:

- Support package should be aplpied on client 000
- The user to be used for support package implemntation must have authorization of DDIC and SAP
- Call the transaction spam and see if any previous support package implementation is incomplete or not
- You can proceed ahead unless previous support package implementation is successful
- Ensure that there is enough space in transport directory (/usr/sap/trans)
- Take a backup before starting upgrade (DB and FS)
- Lock users using (EWZ5)
- Suspend bg jobs -> SE38 -> BTCTrans1
- Valid license should be mandatory

## Steps to upgrade support package

- Download the required support packages from SMP (Service Marketplace)
- Load the support packages (SPAM)
  a) from app server (have to store it in trans directory) >10mb
  b) from frontend (you can store it in any location required) <10mb
  compress support pkgs which are in the trans directory using SAPCAR -XVF.
  .ATT4 .PAT files are there
  .ATT4 = Attrbiute file .PAT = Patch file

c) It will put your files in /usr/sap/trans/EPS/in folder

- Patch version should be latest
- We can revert snotes but we can't revert support pack and addons

SAP Note -> reset (reset snotes)

- System -> status (to check support packs)

## Apply support package:

SPAM -> Display -> select package and click on queue -> go back -> check in queue and click on truck icon (apply)

- It will ask for bg and immediate

## Target Audience

- SAP Technology Consultant
- Technical Business Solution Manager
- IT Governance experts
- Business and Project Team leaders

## System change options

SE06 -> Change system option -> Global Setting (modifiable/non-modifiable)

Modifiable - In the standard SAP s/w component particular component can be modified

Restricted Modifiable - Only can create object. You cant modify directly, you can create an object which will not reflect the original component

Not modifiable - Enhanceable only -> You cant change the object, however the object can be enhanced

Not modifiable; not enhanceable - -> You cant change the object, you cant enhance either
