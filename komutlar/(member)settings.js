const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.MessageEmbed()
    .setColor('#27167A')
    .setAuthor(`Setting Commands`, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)
      .addField('**Change prefix**', 'Change the bots prefix, do &prefix reset to reset it:  `prefix`')
	  
    .setFooter(``, client.user.avatarURL)
    .setColor("#27167A")
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['settings'],
    permLevel: 0
};

exports.help = {
    name: 'dsfdsfdsaaaaaaaaaaaafg',
      category: 'dgdfgdaaaaaaaaaaaaaaaafdfsg',
      description: 'dfaaaaaaaaaaaaaaaaaaagddfsfgfg',
};