const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('To use this please either write `activate` or `close` !')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`You dont have the perms to controll the nether!')
  
  if (args[0] == 'activate') {
    var i = await db.set(`reklam_${message.guild.id}`, 'acik')
   
      message.channel.send('Nether has risen!')
    }
  
  if (args[0] == 'close') {
    var i = await db.set (`reklam_${message.guild.id}`, 'kapali')
      message.channel.send('Nether has fallen!')
    }
  if (args[0] == 'aç') {
    var i = await db.set(`reklam_${message.guild.id}`, 'acik')
   
      message.channel.send('Reklam koruma açıldı!')
    }
  if (args[0] == 'kapa') {
    var i = await db.set(`reklam_${message.guild.id}`, 'kapali')
   
      message.channel.send('Reklam koruma kapandı!')
    }
  
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam', 'ads','blockad','reklam','reklam-koruma','link-block','linkblock'],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: '[Admin Komutu]',
  usage: 'reklamengel'
};