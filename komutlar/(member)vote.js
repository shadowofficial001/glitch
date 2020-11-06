///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

const Discord = require("discord.js");

const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR"))

    return message.reply(

      "Nether might require the literal satan to use this"

    );

 

  let question = args.join(" ");

  if (!question)

    return message.channel.sendEmbed(

      new Discord.RichEmbed()

        .setColor("RANDOM")

        .addField("⛔ The right usage is ⛔", `=> poll **message**`)

    );

 

  message.channel.send(

    `everyone - should I ping some poeple and make it HELL for them?\n**sure** or **no** ! \n10 seconds to go`

  );

  message.channel

    .awaitMessages(response => response.content === "sure", {

      max: 1,

      time: 10000,

      errors: ["time"]

    })

    .then(collected => {

      message.channel

        .sendEmbed(

          new Discord.RichEmbed()

 

            .setColor("RED")

            .setThumbnail(message.author.avatarURL)

            .setTimestamp()

            .setFooter("= = Theres a poll! = =", client.user.avatarURL)

            .addField(`⁉️ __POLL__ ⁉️`, `=> **${question}** `)

        )

 

        .then(function(message) {

          message.react("✅").then(sıra => {

            message.react("⛔");

          });

        })

        .then(everyone => {

          message.channel.send(" @everyone @here ").then(m => m.delete(50));

        });

    });

  message.channel

    .awaitMessages(response => response.content === "no", {

      max: 1,

      time: 10000,

      errors: ["time"]

    })

    .then(collected => {

      message.channel

        .sendEmbed(

          new Discord.RichEmbed()

 

            .setColor("RED")

            .setThumbnail(message.author.avatarURL)

            .setTimestamp()

            .setFooter("= = Theres a poll! = =", client.user.avatarURL)

            .addField(`⁉️ __POLL__ ⁉️`, `=> **${question}** `)

        )

        .then(function(message) {

          message.react("✅").then(sıra => {

            message.react("⛔");

          });

        });

    });

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['poll','oylama'],

  permLevel: 0

};

exports.help = {

  name: "oylama",

  description: "Espri yapar.",

  usage: "oylama sex yapalım mı?"

};

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

///// bu kod BIGGZ e aittir!

