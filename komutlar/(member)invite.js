const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment');




exports.run = (client, message, args) => {
 

    const embed = new Discord.sendEmbed()
        .setAuthor(`${client.user.username} - Invite `, client.user.avatarURL)
        
    
        .setDescription(`[**__click me__**](https://discord.com/api/oauth2/authorize?client_id=733720326646792263&permissions=8&scope=bot) and invite bot :)`)

        .setFooter(`${message.author.username} İnvite the bot!`, message.author.avatarURL)
      .setColor(`#ff0000`)
      .setThumbnail(client.user.displayAvatarURL)
    return message.channel.sendEmbed(embed).then(msg => msg.delete(15000));

  
 

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite','davet'],
  permLevel: 0,
};

exports.help = {
  name: 'invite',
  description: '',
  usage: 'yardım'
};