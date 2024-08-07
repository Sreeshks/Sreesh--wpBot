const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917012286690";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917012286690";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_22_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclBuSFNaeVNwbE5objdybFVxMFBaODFBeFRYUVp5R25rbEQydlZmaGhoYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTcwMTIyODY2OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkyMEY5OTVERjRCNTg0N0EyNzNCQzNGRTM0QUMwM0M5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA0MDU2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzAxMjI4NjY5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjgyN0NDNjNDN0Q1MjNCOTYyOUQ4RUI0QTA0NzA3NERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDQwNTYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3MDEyMjg2NjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQzMwNTZGQjEyNDU3M0FBRkI2MEUwOUM5NkNBQTU5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwNDA1NjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTcwMTIyODY2OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU3MkYxOEY4MTEwNkMwRTIwMzgyRDQyRjQxRUQ4MDdCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA0MDU2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyOWtBc29XTVJKYXJPNWFqZHFxWTlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRlNDgwOTRjLWE1MWEtNDJjNS1iOTg3LWFiNDEwZjJhOTYzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAxODIsXG4gICAgICA5MixcbiAgICAgIDEzOSxcbiAgICAgIDE5OSxcbiAgICAgIDU3LFxuICAgICAgODIsXG4gICAgICAxNDMsXG4gICAgICAyMzYsXG4gICAgICA2OSxcbiAgICAgIDExOSxcbiAgICAgIDIzNyxcbiAgICAgIDE1MyxcbiAgICAgIDc1LFxuICAgICAgNDcsXG4gICAgICAxNCxcbiAgICAgIDU3LFxuICAgICAgMTcxLFxuICAgICAgNTcsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDE5NyxcbiAgICAgIDEyNixcbiAgICAgIDEwMSxcbiAgICAgIDg3LFxuICAgICAgMTEsXG4gICAgICAzNixcbiAgICAgIDUyLFxuICAgICAgNDgsXG4gICAgICAxNzIsXG4gICAgICAyNDQsXG4gICAgICA1LFxuICAgICAgMTU5LFxuICAgICAgNzEsXG4gICAgICAyMDMsXG4gICAgICA1MCxcbiAgICAgIDIxMyxcbiAgICAgIDE1NSxcbiAgICAgIDE0NSxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4WlRLNzZZNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3MDEyMjg2NjkwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI4MDIzMDAyMzQwNTYyNToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNyZWVzaPCfl7/wn6W38J+Pu/CfpodcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMT3A2cThFRUt1R3pyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhDb1h0OEUrb0hpOEo4R3NsSkZqWTB2OUtlTGwxaXpHQWlFelMydytjU0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSmdRZDJvUG1FWWxHNjZZTVk0UjlRQ2E1L08rWGIvaUFxV0tERWRzQ21oVDdWM0t1cjFBZy9mRkNIb0Z0L2g3anVWUW45bi9ob3RoTm5CQXBMMjQ4Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicjdUODU0RHo3OXZ1NVZyTmJocEhjMkg1Yk40QUFPT2tqWG1lMVliL2hWK2FkQVV1Y084UXlCaDBLM1FEMnRQNlc4ZUpCaGRxdFVHelJ6ckx4dTdiQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3MDEyMjg2NjkwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA0MDU1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZMOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkw5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidFBOZGpoMUk5dlZobnY5dmRiNSt4bENWaHhRUmJyTlNXNVcrN0wwQXdVMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTc0MDQ5OTcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwNDA1NjAxNDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Iconixode",
  ownername:process.env.OWNER_NAME|| "Sreesh",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NA& process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Sreesh"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
