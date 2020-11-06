const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.MessageEmbed()
    .setColor('#27167A')
      .setAuthor(`Moderation Commands (6)`, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)
      .addField('**Clear messages**', 'Clear those annoying messages, fast clearing services:  `clear 0-200`')
      .addField('** Forceban**', 'Ban someone by force! Let em die : `forceban @user`')
      .addField('** Softban**', 'Bans someone and deletes all their messages: `softban @user`')
      .addField('** Autorole**', 'Gives new users the role you want: `autorole @role #channel` ')
      .addField('** Linkblock**', 'Blocks all of them advertisement: `linkblock activate/close` ')
      .addField('** Nocurse **', 'Blocks all those people with sad brains: `nocurse activate/close` ')
	  
    .setFooter(``, client.user.avatarURL)
    .setColor("#27167A")
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['moderation'],
    permLevel: 0
};

exports.help = {
    name: 'dsfdsfdsfg',
      category: 'dgdfgdfdfsg',
      description: 'dfgddfsfgfg',
};