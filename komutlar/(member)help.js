const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const prefix = ayarlar;
exports.run = (client, message, args) => {
  
    exports.run = async(client, message, args) => {

    let p = args[0];
     let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let pythonic = args.slice(0).join(' ');
      

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#27167A')
    .setTitle("Sunucumuz")
    .setURL("https://discord.gg/GQHWTvBVUT")
	.setAuthor('Shadow Bot', 'https://cdn.discordapp.com/attachments/736209990871941272/755062661334564904/rsz_1lol1.png')
	.setDescription('Here are some useful commands that lead up to more commands!')
	.addFields(
		{ name: 'Muzik komutları ', value: `Yakında...`, inline: true },
		{ name: 'Yazı komutları ', value: `${prefix}texts`, inline: true },
		{ name: 'Logo komutları', value: `${prefix}logos`, inline: true },
		{ name: 'Mod komutları ', value: `${prefix}moderation`, inline: true },
    { name: 'Bot ayarları ', value: `${prefix}settings`, inline: true },

	)
	.addField('Gif komutları', `${prefix}gifs`, true)
	.setImage('https://i.imgur.com/tisiWVo.png')
	.setTimestamp()
	.setFooter('Shadow 2021', 'https://cdn.discordapp.com/attachments/736209990871941272/755062661334564904/rsz_1lol1.png');

message.channel.send(exampleEmbed);
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help","yardım","yardim","y"],
  permLevel: 0
};

exports.help = {
  name: "helpssdsfdsf",
  category: "helpsasdf",
  description: "helpdsf"
};