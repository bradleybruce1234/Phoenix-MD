const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";

module.exports = {
  //For Enabling Commands Like AUTO_STATUS_RED Type true For Disenabling Type false
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  //_________________________________________________________________________________________________________________________________
  LOGS: toBool(process.env.LOGS) || true,
  //_________________________________________________________________________________________________________________________________
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  //_________________________________________________________________________________________________________________________________
  AUTO_REACT: process.env.AUTO_REACT || 'false',
  //_________________________________________________________________________________________________________________________________
  AUDIO_DATA: process.env.AUDIO_DATA || "Phoenix-MD;Abhishek Suresh;https://graph.org/file/8976892f2f615077b48cd.jpg",
  //_________________________________________________________________________________________________________________________________
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || 'true',
  //_________________________________________________________________________________________________________________________________
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUU5Z1lmUzRaWGhwczIyRGdSTkNRRVVjNzhjeXdmZWZxcDlCS1BGNDFGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGVUdUV3aFRBMTFTb0VGcDRkdUR6dXRvTHFIOXBjZkhrU0E3WFEvSVhIdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQUtDeVVxRDUyaEVXRDErc0NOVzJVdS9ka201emxmNDRHdEo4SjdnMUd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJteTdnaHBTNXA3R0FjMUVLaUdOUGtkL2QvWnIzZ3hlQ3VWR0Uxd212dEhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFISlJtVjlRa3FQVVJMdUVLZEltRzdqdldPbG5FUVRsalZ3RWhxUSt6M1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBJd29vYXZXU1FyRThQUldPWElGSnlkbWZDVTBlWnRSejFWWGxnZ2kvd2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0Q1Y1VhckpORkZsSkI5UHhhYTFWSEFhMlRNUWx2THl4VTJnTy81WHlXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUJjR2prVVZ2aWszb0xUaHdBQUdBSzFLYUI1VHB0VnNuaC9pSHE3WjdWUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA1N0txWmJHYjE1OXN6elpHRWZYUGcvM1VCS0JkYWJTSEp4elRBL0hmaVNnNkVxWkdjVEY0WGZzZTBULzJNQWVyZDIzNzVGRXJYOEFMZGpCZEEydGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IlFiYmxFWFNXVkFWZ0NHaU1WbW93aFBOTVk2TjNaRnM1alFnSnNjbFFMd2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjR2ZHFoSkpvUUYyME9kSEluTHNpX0EiLCJwaG9uZUlkIjoiODY0ODk3MmQtZDY0OS00NDZhLWE3ZDUtNWEwYTQ1M2IyNDgzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhXeFpId0M1WEM0RUhVSWVmT2I1aElIMVFvOD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGE1alJvbzE2azVldUFTdGFJY1RWRUNNOXprPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVQ0cXU4SEVMSEpuTElHR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWCtaTU53bW1PVk9SL291cFora2hnby9qVFgxay9uODJjTlovTWtnM3VoYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK2pwWTMxenlNUUZzTC9PeTMrbFRkQlFOZGEvei8wSmtERDh4N0xXaEdRNVZBNTVLRU5hZitpd2RiOUs1OTliaDN5eDVZNUtWYTNDZjhMU0p0UmtpQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Ikw5UURiVFVqSXhBK0tOYjZZZUxxMlphZEdiRmxhRXo1Z2RxYWFoVTN4aDhZNTRnZkhhYTVKQnN2aElPU2VmcE1mNXNrUTNlcUY5dkdvT1Z2eDcvT2h3PT0ifSwibWUiOnsiaWQiOiIyNTQ3NTU4Mjk0OTI6NDRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjYwNjUyMTI1MzUwMTA6NDRAbGlkIiwibmFtZSI6IkJydWNlIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1NTgyOTQ5Mjo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWL21URGNKcGpsVGtmNkxxV2ZwSVlLUDQwMTlaUDUvTm5EV2Z6SklON29YIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1OTM4NDk1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdYdCJ9", //Enter Your Session Id Here
  //_________________________________________________________________________________________________________________________________
  SUDO: process.env.SUDO || "919074692450",
  //_________________________________________________________________________________________________________________________________
  SPAM_COUNT: process.env.SPAM_COUNT || "10",
  //_________________________________________________________________________________________________________________________________
  LANG: process.env.LANG || "EN",
  //_________________________________________________________________________________________________________________________________
  HANDLERS: process.env.PREFIX || '.',
  //_________________________________________________________________________________________________________________________________
  RMBG_KEY: process.env.RMBG_KEY || false,
  //_________________________________________________________________________________________________________________________________
  BRANCH: "main",
  //_________________________________________________________________________________________________________________________________
  STICKER_DATA: "🎯𝙿𝚑𝚘𝚎𝚗𝚒𝚡-𝙼𝙳;𝙰𝚋𝚑𝚒𝚜𝚑𝚎𝚔 𝚂𝚞𝚛𝚎𝚜𝚑☘️",
  //_________________________________________________________________________________________________________________________________
  WELCOME_MSG: process.env.WELCOME_MSG || "👋 Hello *@user* Welcome To Our Group *@gname*\n*Total Members:* @count\n*Group Description:*\n@gdesc {pp}",
  //_________________________________________________________________________________________________________________________________
  GOODBYE_MSG: process.env.GOODBYE_MSG || "👋 GoodBye *@user* From *@gname*\n*Total Members:* @count {pp}",
  //_________________________________________________________________________________________________________________________________
  DATABASE_URL: DATABASE_URL,
  //_________________________________________________________________________________________________________________________________
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  //_________________________________________________________________________________________________________________________________
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  //_________________________________________________________________________________________________________________________________
  OWNER_NAME: process.env.OWNER_NAME || "Abhishek Suresh",
  //_________________________________________________________________________________________________________________________________
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254755829492",
  //_________________________________________________________________________________________________________________________________
  BOT_NAME: process.env.BOT_NAME || "Phoenix-MD",
  //_________________________________________________________________________________________________________________________________
  WORK_TYPE: process.env.MODE || "private",
  //_________________________________________________________________________________________________________________________________
  MENTION_DATA: "Phoenix-MD;919074692450;https://graph.org/file/63942461d4b8d78b360d3.jpg;https://graph.org/file/bb3ac71ec991cef3d5216.mp4",
  //_________________________________________________________________________________________________________________________________
  BASE_URL: "https://abhi-api-bvws.onrender.com/",
  //_________________________________________________________________________________________________________________________________
  //Database
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
