const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let onlycode = args[0]
 let codeonly = args.join(`+`)
 
if(!onlycode) return message.channel.send(`Im hades not a brain reader`)
 const embed = new Discord.MessageEmbed()
  .setColor('#27167A')
  .setDescription('Image generated.')
  .setImage(`https://flamingtext.com/net-fu/proxy_form.cgi?script=everest-logo&text=${codeonly}&_loc=generate&imageoutput=true`) 
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['everest'],
 permLevel: 0
};

exports.help = {
 name: '3423454s3sdaasdasd5-yaz',
 description: '2s42342asdadsads yazar.',
 usage: '4242sd3dasasdads34'
};