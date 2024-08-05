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
global.wlcm = process.env.WELCOME || "true";
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
 "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xpdnRONkkvZDJKWUZwcmhvZmtPaW05bGhtN2hLczZrajhDY3VvMStsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnhGYWh3Q0dDMFBsalRDbzdyS2gxWGdRQmVJWGNMd1Zud2ZxeFk1bXdubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSVFDb1JPcmZRb1V0NVJhL0JERGU0Q2FtM3BVMUlPQ0owOFBpQzhxNEZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1L24zUS9qc01MWXFQU291L3QwUldvMXVGNXJOYWVGWktMb3U2Zk1hL25rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIUVFuaTFnSmZ1cFQ0NytRQzAyZFVMVUVLRFh6VlQ3T2NWTi9XOTg3M3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndoWmFsYS9ydUFJSkNBS1NTajBHUWhSV0RmRHlzYTF2VFVXRjN2dWM1RjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENwM3dvUUtqbGVmcFJKcmNqR2xBcXgwaEUrcldCaXlUdVF2clVjWlVHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBTZy9pRXNoNURXU25tTXhnV0hadVFKSUpHYmdGdGZKclZ0MXJxUXBYWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJPemw0cE1GT3A4SVJjT2J5TFU0a21VZExqcFpkRGdLMi9pRGtKcWxwK09ON0lkT3ZuQlIxRzFOcitDUXBabGxPcWQyOEJPV0U4UUk4SnlSK2ZOVGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6Ii8xUTFialp0TjZweW9sZ2pwNUhKRHpLZXc3elJJbDJPOVUwTTNyNXlJbDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImM3UThVWVZoUW8ybnBSWGpXdnBsQWciLCJwaG9uZUlkIjoiZjZjMWNjNzEtNzA5ZC00MzI4LWE2NjQtMjVlZTM2OTQ5ZDgyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktwM3JHS2VCRkFZck5RY1ltQ2NNZ3MxczRaUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVW53T1JqdUdaR1dhbU9wMzJFcTRsMnZJeUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVFCQ1RXTUEiLCJtZSI6eyJpZCI6IjkyMzI4MTUxNDg0NDoxNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZJeDVvR0VKajZ3TFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRnVjTXJtOUdibnJsRjNmUUI0dzNwRDdtWjQrWklXTXhzODF5UmlrUjJROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiemNFTDAvdVkxajEwVHJnMFlnNmZDM2tlNEUzNlFFYjJtVTB0ZFozaGUvS0tkN2RQQnEzRzVmaWQrNnhZLzFBSVA5d3NoeXp3UjU4a3c3bTJYUkVRQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5MdWxLZHU2U0t3Uy94R0QvWTBuN3o0QnJuU20ybXd5djBBc3JBckxBNTFCYktTbFV5VFhlNVppNlVDNXUwREZVcFNTeDVGUG1zYmRFd2lVM2VZYWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjgxNTE0ODQ0OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJibkRLNXZSbTU2NVJkMzBBZU1ONlErNW1lUG1TRmpNYlBOY2tZcEVka1AifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4MjYwMjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXdyIn0="
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
