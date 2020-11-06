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
              `**Gif commands**\n **${prefix}anime** = Generates an anime gif \n **${prefix}boy** = Generates a boy! \n **${prefix}girl** = Generates a girl gif!! \n **${prefix}cartoon** = generates a gif from your favorite cartoons`,
                  `**Nothing to see here yet**`,
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
aliases: ["gifs","gif"],
permLevel: 0
};
 
exports.help = {
name: 'yardımdssssssssf',
description: 'Yardffffffffffım Listesini Gösterisssssssssssssr',
usage: 'yardffffssssssssssffffffffım'
};
