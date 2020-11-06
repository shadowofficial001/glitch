const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
  let kanalid = message.channel.id;
let channel = bot.channels.get("737347168159006806")//bug repot kanal id
let embed = new Discord.RichEmbed()
.setTitle("Bug Reported | GtBrief Report System")
.addField("Bug", bug)
.addField("Reported by", user, true)
.setColor("#ffa500")
  const embed2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setDescription(
      `${message.author.username}, Your report was sent to the developers, action will be took!`)
    message.channel.send(embed2)
channel.send(embed).then(message => {
  message.react('❌')
  message.react('✔')
  });
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reportbug', 'findbug'],
  permLevel: 0  
};
exports.help = {
  name: 'bug-bidfsldir',
  description: 'Botlafds ilgili hataları bildirirsiniz.',
  usage: 'bug-bisdfldir'
}