const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let onlycode = args[0]
 let codeonly = args.join(`+`)
 
if(!onlycode) return message.channel.send(`Im hades not a brain reader`)
 const embed = new Discord.MessageEmbed()
  .setColor('#27167A')
  .setDescription('Image generated.')
  .setImage(`https://flamingtext.com/net-fu/proxy_form.cgi?script=dance-logo&text=${codeonly}&_loc=generate&imageoutput=true`) 
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['dance'],
 permLevel: 0
};

exports.help = {
 name: '422424ad-sdgdfgdfg',
 description: 'Yazı23dfdasfdfgdfgdfgsf4234234ya325345zar.',
 usage: '2342342325dsfasdgfgddgfs334342'
};