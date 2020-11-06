const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(`Nether`, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)
      .addField('** Kullanıcı komutları (6)**', '`davet`, `yardım`, `istatistik`, `hata-bildir`, `help`, `texts`')
      .addField('** Yazı komutları (8)**', ' `smurf`, `potter`, `fluffy`, `sugar`, `crafts`, `star-wars`, `sunshine`, `dance`, `skate` ')
      .addField('** Eğlence komutları (9)**', ' `kuş`, `creeper`, `stres-çarkı`, `headsortails`, `bet`, `math`, `mcskin`, `emoji`, `banner`,`anime`, `texts` ')
      .addField('** Mod Komutları (6)**', '`reklam-koruma aç kapa, `küfür-engel`, `sil`, `poll message` ,`softban`,`otorol @rol #kanal`, `forceban`, `sustur`')
      .addField('** Yönetici komutları (3)**', '`önekayarla önek`, `yavasmod`, `ai activate/close(BETA)`, ``')
      .setDescription('Skybox X Mehmet')
    .setFooter(``, client.user.avatarURL)
    .setColor("RED")
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım'],
    permLevel: 0
};

exports.help = {
    name: 'helpss',
      category: 'helpsa',
      description: 'help',
};