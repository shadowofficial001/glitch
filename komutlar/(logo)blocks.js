const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Please enter text.** <a:1603_Animated_Cross:736227888864690277>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/1a4f4094-9846-4745-b912-66be34b4b9af?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('The hell\'s logo delivary services')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['blocks'],
    permLevel: 0
}

exports.help = {
    name: 'grsdsdsdfsadsensadsad',
    description: 'Yasdfssdsadsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'gresssdenssdssaaasddassyazı>'
}