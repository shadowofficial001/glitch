const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

var skybow = "Nether v12, pythonic";

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Adet komut var!`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commads.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};





//otorol
client.on('guildMemberAdd', async member => {
  let log = await db.fetch(`onlycode.otolog_${member.guild.id}`);
  let log2 = client.channels.cache.get(log)
  let rol = await db.fetch(`onlycode.otorol_${member.guild.id}`);
  let otorol = member.guild.roles.cache.find(x => x.id === rol);
  if (!log) return;
  if (!log2) return;
  if (!rol) return;
  if (!otorol) return;
  log2.send(`User \`${member.user.tag}\` successfully given role to  \`@${otorol.name}\``)
  member.setRole(otorol)
});


//reklam engel
client.on("message", async msg => {
  var mayfe = await db.fetch(`reklam_${msg.guild.id}`);
  if (mayfe == "acik") {
    const birisireklammidedi = [
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      "net",
      ".rf.gd",
      ".az",
      ".party",
      "discord.gg"
    ];
    if (birisireklammidedi.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          return msg
            .reply("Nether rised and will not let you send your links !")
            .then(msg => msg.delete(3000));

          msg.delete(3000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  } else if (mayfe == "kapali") {
  }
  if (!mayfe) return;
});

//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\


const emmmmbed = new Discord.MessageEmbed()
.addField(`Nether - Have fun!`)
.setTimestamp()
.setImage(``);

client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(emmmmbed)

});



//no curse
client.on("message", async msg => {
  const i = await db.fetch(`${msg.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq",
      "fuck",
      "asshole",
      "idiot",
      "shit",
      "piss off",
      "dickhead",
      "bastard",
      "bitch",
      "cunt"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply("Sure this is hell and all that but geez")
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  const i = db.fetch(`${newMessage.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "red",
      "amk",
      "ananın amı",      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq",
      "fuck",
      "asshole",
      "idiot",
      "shit",
      "piss off",
      "dickhead",
      "bastard",
      "bitch",
      "cunt"
    ];
    if (kufur.some(word => newMessage.content.includes(word))) {
      try {
        if (!newMessage.member.hasPermission("BAN_MEMBERS")) {
          newMessage.delete();

          return newMessage
            .reply("Sure this is hell and all that but geez")
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});



////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip,ayarlar.sahip2,ayarlar.coder) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bg#27167A.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

///////////////////////////////////////////////////////////////////////////////////////////////////BURASI SON! BURDAN AŞAĞIYA KOD YAPMA DARKTEAM.JS



