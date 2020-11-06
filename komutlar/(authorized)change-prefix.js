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

if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Sorry, only "ADMINISTRATOR" authorized users can use this command.`);
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let onlycode = args.slice(0).join(' ');
  if(onlycode < 1) return message.channel.send(`you have to pick the prefix that you want to use specially for this server (\`${prefix}prefix <prefix>\`) if you are going to reset the prefix: \`${prefix}prefix reset\` `)

  if(onlycode === ayarlar.prefix) return message.channel.send(`sorry but you can't set your bot prefix. if you want to reset \`${prefix}prefix reset\` `)
  
  if (onlycode === "reset") {
   db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Prefix succesfully reset! New prefix: \`&\` if you forget the prefix, type /helpprefix`)
    return;
  }
  
  var yeniprefix = db.set(`prefix_${message.guild.id}`, onlycode)
    message.channel.send(`Prefix changed! New prefix: \`${prrefix}\``) // silmiomda 
    
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