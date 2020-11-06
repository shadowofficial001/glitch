const Discord = require('discord.js');

var hd = [
    "Heads http://giphygifs.s3.amazonaws.com/media/6jqfXikz9yzhS/giphy.gif",
    "Tails https://thumbs.gfycat.com/DeadDownrightIndianhare-size_restricted.gif"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + "  " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['headsortails','h&t','hort','hot','yt','yazı-tura'],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'yazı-tura'
};