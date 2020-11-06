const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Please enter text.** <a:1603_Animated_Cross:736227888864690277>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/34023f54-8ee3-4167-baa1-048b8c9f0b2a?v=4&text=${yazi}`
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
    aliases: ['honeycomb','honey-comb'],
    permLevel: 0
}

exports.help = {
    name: 'grsdsdssdfdfdfsadsendfsdfszzxzsadsad',
    description: 'Yasddsfsdfsdfssdsaddzxzxzxsfsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'gresssdensdsdsfsdfsdfzxxxxxxxxxxxfsdssadsfaasddassyazı>'
}