const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media1.tenor.com/images/21774dc4401668d774bb1fd5e0f54d00/tenor.gif?itemid=13750114"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle(":3")
        .setColor("#FF69B4")
        .setFooter(`${message.author.username} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dealwithit','deal','creeper'],
    permLevel: 0
};

exports.help = {
    name: 'dealwith',
    description: 'dealwithit xd',
    usage: 'dealwithit'
};