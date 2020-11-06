const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} spinned a fidget spinner!`,
            image: {
                url: "https://media1.tenor.com/images/aa4d4724c69357132d9c938b4ebcf612/tenor.gif?itemid=14825348"
            }
        }
    });

    let bitiş = (Math.random() * (8 - 1)) + 15;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, your fidget spinner spinned for ${bitiş.toFixed(2)} seconds.`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['fidgetspinner','spinner','stres','stres-çarkı'],
  permLevel: 0 
};

exports.help = {
  name: 'stresçarkı', 
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'stresçarkı'
};