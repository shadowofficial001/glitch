const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  let prrefix = args[0]
if (!message.guild) {
  return message.author.send(`:x: You cannot use this command in your dms.`); }
if (message.author.bot === true) {
  return;
}

if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Yetkin yok`);
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let pythonic = args.slice(0).join(' ');
  if(pythonic < 1) return message.channel.send(`yanlış kullanım `)

  if(pythonic === ayarlar.prefix) return message.channel.send(`yanlış kullanım`)
  
  if (pythonic === "reset") {
   db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Prefixiniz resetlendi`)
    return;
  }
  
  var yeniprefix = db.set(`prefix_${message.guild.id}`, pythonic)
    message.channel.send(`Prefixiniz değişti, yeni prefix: \`${prrefix}\``) // silmiomda 
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['new-prefix', 'new-prefix', 'changeprefix', 'change-prefix', 'prefix-change', 'prefixchange', 'prefixayarla', 'önekayarla', 'ön-ek-ayarla'],
  permLevel: 0
};

exports.help = {
  name: 'prefix',
  description: 'Botun bulunulan sunucuya özel prefix\'ini değiştirirsiniz.',
  usage: 'prefix <prefix>'
};