const skybowshard = require("./ayarlar.json");
const skydc = require('discord.js');
const skybow = new skydc.ShardingManager('./index.js', { // Main dosyanız... Yani index.js app.js bot.js main.js ve benzeri
    totalShards: 2, // Bunun 2 kalması idealdir.
    token: skybowshard.token // Botunuzun tokeni
});

skybow.spawn(); 

skybow.on('launch', shard => {
  console.log(`${shard.id} ID'li shard başlatıldı!`)
});

setTimeout(() => {
    console.log("yeniden başlatılıyor..")
    skybow.broadcastEval("process.exit()"); 
}, 21600000);