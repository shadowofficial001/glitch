const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'activate') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('Nether has risen to block all cursing!')
  return
}
if (args[0] === 'close') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('Nether has fallen')
return
}
if (args[0] === 'kapa') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('Kapandı')
return
}
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('Açıldı!')
  return
}
  message.channel.send('You know Im the satan and all that but I still need to know what you wanna do!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['nocurse','blockcurse','curseblocker','küfür-engel'],
 permLevel: 2
};

exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};
