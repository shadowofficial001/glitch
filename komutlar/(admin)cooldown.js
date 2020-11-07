const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "Yetkin yok."
    );
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    var embed = new Discord.sendEmbed()
      .setDescription(`Yanlış kullanım`)
      .setColor("RED")
      .setTimestamp();
    message.channel.send({ embed });
    return;
  }
  if (limit > 10) {
    return message.channel.sendEmbed(
      new Discord.sendEmbed()
        .setDescription("Maximum 10 sn olabilir")
        .setColor("RED")
    );
  }
  message.channel.sendEmbed(
    new Discord.sendEmbed()
      .setDescription(`Değiştirildi!`)
      .setColor("RED")
  );
  var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "yavas-mod", "yavasmod", "cooldown"],
  permLevel: 1
};
 
exports.help = {
  name: "yavaşmod",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "yavaşmod [1/10]"
};