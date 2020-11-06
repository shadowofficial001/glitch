const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const prefix = ayarlar;

    exports.run = async(client, message, args) => {

    let p = args[0];
     let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let onlycode = args.slice(0).join(' ');


exports.run = (client, message, args) => {
  


  let pages = [
              `**Logo commands**\n **${prefix}anchor** = Generates an anchor logo \n **${prefix}blocks** = Generates a cool little blocky village \n **${prefix}cube** = Generates a cubic logo \n **${prefix}flyshoes** = Ever imagined shoes with wings? \n **${prefix}fox** = Classic and shiney foxes \n **${prefix}funky** = Old yet classic, funky.`,
             `**Logo commands**\n **${prefix}globe** = Generates a globe logo \n **${prefix}honeycomb** = Generates a cool little blocky honeycomb \n **${prefix}horse** = a shiney black & white horse logo! \n **${prefix}green** = Its like lettuce, it is green \n **${prefix}stars** = We will dance among the stars \n **${prefix}tech** = A new year, a new tech.`,
             `**Logo commands**\n **${prefix}cloud** = A man mixed with a cloud \n **${prefix}burger** = Generates a cool little burger \n **${prefix}human** = a human! \n **${prefix}mountain** = its a mountain.. \n **${prefix}ghost** = Be aware, he can't touch you. \n **${prefix}panther** = Its a damn panther. \n **${prefix}pegasus** = Its a damn pegasus. \n **${prefix}python** = Its a damn python. \n **${prefix}dragon** = Its a damn dragon. \n **${prefix}ghoul** = Its a damn ghoul. \n **${prefix}purple-dragon** = Its a damn purple-dragon . `,
              ];
  let page = 1;
 
  const embed = new Discord.MessageEmbed()
    .setColor('#27167A')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Page ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {
 
  msg.react('⬅')
  .then(r => {
    msg.react('➡')
 

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('#27167A')
        embed.setFooter(`Page ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('#27167A')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} / ${pages.length}`)
        msg.edit(embed)
      })
     })
    })
  }
};
 
 
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["logo","logos"],
permLevel: 0
};
 
exports.help = {
name: 'yardımdsf',
description: 'Yardffffffffffım Listesini Gösterir',
usage: 'yardffffffffffffım'
};
