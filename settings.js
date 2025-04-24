/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VVy46jRhT9l9q2ewwYbGyppQDGb/CDhx9RFgUUUDYGTBUYPGopX5AoHxBFkZJVNJptNvmD/MTMMpvkExLa3ZqWZjLpsCoVVefee+65p16DOMEETVEFeq9BmuECUlQvaZUi0ANy7vsoAw3gQQpBD6DJqETbznDh433p0sViXia7Pe5OKmNUXFL9PMpsdSckJ1W9A/cNkOZOhN3PACbaPmU26YAZO7qPJHO7hOqGc3c2Ovv7hWgsqsF6a46DsrLuwH2NCHGG40BNQ3REGYymqFpAnL0sfWvW181A21vlNtQ5ZoQ6QWUqgy3uuoGeTNDA44pyReQba/yy9FvKhCXzXKbMtslcBpuO2OVyI+PdUbTe4HKKQ2+3Xg+dWRhc0yc4iJE39lBMMa1ezDvR+MSUbgbjS2Qf1KlEd2Y1s8sLOTSXY1kKOsWIpuFoi+wXJs6Fa6VdThOXCFFz2dfgakEzJpCN00Ls8HtZVaqgHZjLUBGfJ77InrRy+D+8c3p7JZhyc9zlJlzLi92+hppR6XDrxU4PNCF3VGznnDd/Ke8rZOZ8SvRdUgZE5xg93anZae4XzCm4ONtST2R74Ca5f9Y+pA9pnn1WHZIy4NqumoRdw55aYtP3IoOKW1MKVjM45cbpSmfSFU/bxdpuF/aGFFs9P47EkFULzK66pWrbTspaMTNP7EqN+uZeCu4eKjqgauyBHnvfABkKMKEZpDiJ6z2OYRsAeoWB3AzRB3pBOJyahTX3+wzyi3W8a4lK7Jsz1hLMG4J0BWp8tRSF/mh/vgMNkGaJiwhB3ggTmmSVhgiBASKg9+VDp+qiM3RMKJpgD/RAl2uxTIvnRbYtfkFenUNICUzTVzGioAH8LDlqCPRolqMGeLjAKaLckUSl3RaVLsep7e6gw7f4fl8SWorcatUlHq9BTXxEhMJjCnpshxf4rsB1+PuvGiBGJb3qp666xTaAjzNCrThPowR6T+J6+gldN8ljalSxq9QLlIHes21EKY4DUleWxzBzQ1wgpa4D9HwYEXTfAB4qsItqPHC0N+48UE/Gqh0c9ZZw61lLQ6qZC5P4eqTluwLvws4tx/PdWx467q3Diq3bjs8ikeE8KLgdUNNxHd36zr8qSS7kjihOk+3NhnOKzlCpZrncLI/H8KrvqwRQhrwnlh3oHvLUTA4o/pz9BmQ69HfieM0ql6266VqKyC6rCZ0vn+FepQV6rz/YpZJ4NR5n6LbZNdeg7lYd5yM19Fj2Y0HEsD4N3v38y7s3P2rzuf7+m7d/vH3z+2/vv//pz1+//euH776uoz+2psb1EIU4IqAHlDl3idtLVdWcyUmThkNJDSQlqLl/auXTaF6lv901mVmmXw4kJBNrMz1vjFksS8ZBOrndJFxbZ1dHsrkYGMndJ0BqhEjdSfw8NEggsKx5E4aCoo20vbzYMgd5NcTMzjZE7Xhyh9MgoEdj3R1sJ045HeJ9W11uRu1gI1xOJGQqduiYXC66iSLd1dGuknoe7MzsByNVngRYxXt/JUv7nd5uDsaaNSjiUvKCsI+SgwNd386oJgTpOhJSi4y5POFu+pVVVWlxsxjvmKOyb5XOephIUFleTePBtKLHxwI/jvNVgD5GD9772Jr/bOGHWWDuG88wHt3833S8HvpdpX1xhdnYUexBRQYMFs5LNZWm8QKO7Ugb9TeBdSmtE7ivhzyNIPWT7PiPXGDsZQn2QANEkFDpwzh/wiEEtgGOlZSmBoX0yQWAVH99dg7u/wayjCoYqAgAAA==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
