const Discord = require(`discord.js`);
 
exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('You need to type a player.');
 if (mesaj == member) {
    message.reply('Ur annoying :/')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Here: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
 }
};
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['mcskin','skin'],
 permLevel: 0
};
 
exports.help = {
 name: 'mcskin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcskin <oyuncu>'
};