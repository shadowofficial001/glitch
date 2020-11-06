const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kanal = message.mentions.channels.first();
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send("You do not tag channel");
  if(!duyurumetni) return message.channel.send("Error write a paragraph.");
  message.delete();
  message.channel.send("Succesfuly, announce!");
    kanal.createWebhook("Announcement", "https://i.ibb.co/br5xztH/duyuru.png")
    .then(webhook => webhook.edit("Announcement", "https://i.ibb.co/br5xztH/duyuru.png")
        .then(wb => {
            const duyurucuPing = new Discord.WebhookClient(wb.id, wb.token);
            duyurucuPing.send(duyurumetni)
            duyurucuPing.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["announce"],
  permLevel: 0
};

module.exports.help = {
  name: 'duyuru',
  description: 'Duyurucu',
  usage: 'duyuru'
};
