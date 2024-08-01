//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "apgking208@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakBHyrAYlUIPoj8es1n";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakBHyrAYlUIPoj8es1n";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/327d2ddca14db518b59e1.jpg";
global.devs = "923281514844";
global.sudo = process.env.SUDO || "263778389057,2348169546065,2348162139814,2349066696753";
global.owner = process.env.OWNER_NUMBER || "923281514844";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/327d2ddca14db518b59e1.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09sZWpuVThQakpldldFOG1PckVTaGhZY1FsQ1RvdkVycm1ZMjhGaFlVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREJQM09lVGowcHhjVjQ3c0c4N2EwME9EV29UaUtyTXkxRjVBc2FuaTBBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSXBsK2piK1hoenc3S1VCcXZaS2pxVjBrRUNjVDZ3bjFCdkZhMEpvOUc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6NSsrZkhIRURJcGkxUFcxUFhRN081Vmw4R0NHenZCSXdnQmpXbXpaMlg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhBWHNWckErKzdGR1NQQ2VQME84dG9FeXJ0K3Q0WkNEdFRxWG1CdVRsV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFZa0FWSjVHYlprbTVnV0ovaVBvZ2tIMnQ0c2hRUUdhRUZDU2J5Yi9KbG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09Zb0haNWhRK3Y2a0NNdEt1L2VkQWs1ZEcraHdIajVvTTl6NTNmQlkyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXM0QVFMN040cDE0T2xmWDN6ak9WTElmL2xJQXFYWVRBNXBQMGZHM1JrRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlCUkdjZWJzWnVtVnBaTEQ0cFlHQ1RleUFndk1pT3Rxb3FDS2VzektIVHNpZ1UyY2N6ZlF5S1U1LzdzSUg5dkFvejFVd2ZJRnhUMFZpYlRzQmYrN0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiIreUs0YUMwRHFLL09OSTNtUlMwZ1lla3RFaEF5ZmYwam0rL0tBNGxMRlNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwRjFraERDTlRpLWZWU1VuaGhWeHRBIiwicGhvbmVJZCI6ImEzNTkwYmU2LTdjZDUtNGFjYy05YWY1LTM3ZGRkNGZiZDYwYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwY1BZZGprL3hJODUvTmxNMmxqeHZHR0dxNlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmlacE13WWVUL1YzelIxUm13WWxuU1NTbVBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE3VkpZQ1JEIiwibWUiOnsiaWQiOiI5MjMyODE1MTQ4NDQ6MTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00ySXg1b0dFUEgxcnJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZ1Y01ybTlHYm5ybEYzZlFCNHczcEQ3bVo0K1pJV014czgxeVJpa1IyUTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlQrZFdtVjBqL0N5cndYN29oTHpRN3ViVHl2WkdHZStOcGNkaUp4OWtYb1JTTlhzOEpyT0E3M280bExvMGhXUDMxYVE5ckxGenVTSmtGQjlrM2J1b0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6LzFzYWIwMnJ6dVo3Q3A4VEQ5TWZIc1FVZktXMTczMG9RUGdPM3FhTUV2dUtlYUpzNDRuQlVnMEwrUFNuYUVRcEdxWVUrWWdQdzB2VWFlalFqT21Bdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI4MTUxNDg0NDoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSYm5ESzV2Um01NjVSZDMwQWVNTjZRKzVtZVBtU0ZqTWJQTmNrWXBFZGtQIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTMwNTYwfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Soul Society by Aizen ™`",
  author: process.env.PACK_AUTHER || "Kyoka Suigetsu",
  packname: process.env.PACK_NAME || "Shikai",
  botname: process.env.BOT_NAME || "Soul Society",
  ownername: process.env.OWNER_NAME || "Aizen",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
