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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExXdi8xRnJGZ1NMbXg2eG5lT29WTlFoVDJabG44UlQ5VlZBYmNNWGJrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDNrRzZCM3NNM2VEYjZBWmFGaWFuWXQ5SXhrMEhBNGNSK2czamFPN2Ntcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTUIxaUxXUkR3SEZvMnI4S3Rja0grNEs2azdZaGRtZmI0UXNJYmJHbmtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBeEJXQTRqZDNHblcyZndIMDV0bWNwRnVEWmV3b3UyTUthaUx2R1ZQV2lnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Cdk9MQWtKYlpDQVh5YVlHbkp4TWljaXRHUzB2S2QzZ3dISWNkU1krbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFXdHpMNHVPU3V3eUNRWUVsaWFlRG44Wm9maVllUVEyUmg2WFVzdSs1VWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtHczdFY0hYaG5NT0pjUGdTcWtDeml0ZllyUVZDZmtlbTZiZ3BBQzkwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xPa2ZPR1VoNks4b2NleEFBZjAzcUo4VjI2L0wyL2pONU5hdXpZZTJXdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZEZk5qTm5qSzUxdVh2YTBpRm42TFZVditFVjR0b0wwakFsMUFyUjQyRXNhNStjVTE2S3dpT1NhMVFMeU5nOHFnczVUaVEwS1VqakQ5YXdjK3VSOWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJ1NkFUUW5EcWtRL3VIYzhNUURkbVlTMEcrcXViejdpRjk0NHRsSFBxWnI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKSm5VaXhTWFFweV9hM3k4Q2xDSU5BIiwicGhvbmVJZCI6ImM1MTMxYzkzLWMzMmMtNGU2Ni1iMzZlLTZhOGNkMDVmYjQ0OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIza0lPT2IzcEtyZkg2R1d2NUtlV1l2UHNrc2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnpOeWVXdXM1VTV0dmRvbXJ2NUwzUmFYVXNVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllUVDdGWlNBIiwibWUiOnsiaWQiOiI5MjMyODE1MTQ4NDQ6MTFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ015SXg1b0dFS1dFckxVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZ1Y01ybTlHYm5ybEYzZlFCNHczcEQ3bVo0K1pJV014czgxeVJpa1IyUTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndvS05GU1ljc2VlTWJtMDRpdFJjUWpmSGpnQ292QVBiY3pUS2JzdHpDSEZwcURtZWs1OUtnMnErbEYyMGxtbmFnYUVtSFVwWW10Wlh5WmtlK1JlK0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkVDZ2bjg3ZXJOMklFd1YvLzcveE1RbEFZNjVuaDh2VFVWZWZQOW40YWZPbXh1ZFRnQUdUVVQvd3BZYjlMZXNlclNrRjhOY21uVmFGM0E4T1hNZXBnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI4MTUxNDg0NDoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSYm5ESzV2Um01NjVSZDMwQWVNTjZRKzVtZVBtU0ZqTWJQTmNrWXBFZGtQIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDgzMjUwfQ=="
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
