const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You not have **Manage Messages** permissions");
if(!args[0]) return message.channel.send("🚫 **How much of those little messages should I be destrying sir?** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` 🔥  ${args[0]} Messages Was Destroyed 🔥`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear','sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayddsısı>'
};