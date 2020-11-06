const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Hades only m8`);
let otorol = db.fetch(`otorol_${message.guild.id}`)
let rol = message.mentions.roles.first()
let rolk = message.mentions.channels.first()

if(args[0] && args[0].toLowerCase() === 'reset') {
if(!otorol) return message.channel.send(`You canot set autorole on this channel.`)
 db.delete(`otorol_${message.guild.id}`)
 db.delete(`otolog_${message.guild.id}`)
 message.channel.send(`Autorole has been reset.`)
 return;
}

if(!rol) return message.channel.send(`You need to mention the role.`)
if(!rolk) return message.channel.send(`Yes the channel too...`)

db.set(`onlycode.otorol_${message.guild.id}`, rol.id)
db.set(`onlycode.otolog_${message.guild.id}` ,rolk.id)
  
message.channel.send(`Users will get the role \`${rol.name}\`, on the chnanel ${rolk} `)
};
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['autorole','role','otorol'],
 permLevel: 0
};

exports.help = {
 name: 'otorol',
 description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
 usage: 'otorol <@rol>'
};
