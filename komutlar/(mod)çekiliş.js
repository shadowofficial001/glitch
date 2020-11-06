const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;
 
  
  
      message.channel.send(`:eight_pointed_black_star:| **Type a channel for the giveaway to go on**\n Please type one by one`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send('**Channel not found, do not use #**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit('**When? Where? Hades isnt known for reading minds | 1s-59s(second),1m-59m (minute), 1h-59h(hours), 1d-6d(day), 1-3w(week)**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**I dont know time period like this**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit('**Specify a reward**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("#f558c9")
                  .setDescription(`**Reward:: ${title}** \n🎉'a Press join   \nEnd Time:${duration} \n **Start Raffle   :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username + "", message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Raffle STARTED!** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("RED")
            .setFooter("(Skybow - Mehmet)")
                       .addField('Giveaway ended !🎉',`Winner : ${gFilter} \nEnd time :`)
                       .setTimestamp()
                     m.edit('** 🎉 Giveaway ended 🎉**' , {embed: endEmbed});
                       
                       var embedLel = new Discord.RichEmbed()
                        .setColor("RED")
                        .setDescription("Get your prize by dming the folk!").setFooter("(Nether Giveaway)")
                    message.guild.channels.find("name" , room).send(`**Congrats ${gFilter}! \`${title}\` won!**` , embedLel)
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **Hades only..**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gelişmiş-çekiliş','çekiliş','giveaway'],
 kategori: 'çekiliş',
  permLevel: 2
};
exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş yapar (gelişmiş)',
  usage: 'çekiliş'
};