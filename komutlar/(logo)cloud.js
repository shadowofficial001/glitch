const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Please enter text.** <a:1603_Animated_Cross:736227888864690277>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/203b85dd-f8a7-499c-a0ae-3394e3ffd6c2?v=4&text=${yazi}`
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
    aliases: ['cloud','cloud-person'],
    permLevel: 0
}

exports.help = {
    name: 'grsaaaaaaaaaaaaaaaaaaaaaaaaaadsdssdfdfsadsensadsad',
    description: 'Yasddsffssdsadsğasdasdsdaaaaaaaaaaaaaaaaaaaaaaaaaaasınız yazıyı bannera çevirir.',
    usage: 'gresssdensdsfaaaaaaaaaaaaasdssaaasddassyazı>'
}