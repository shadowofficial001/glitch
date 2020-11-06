const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = async (client, message, args) => {

  this.matematiktopcik = 0
  const topcikbelli = Math.floor(Math.random() * (3 - 1)) + 1
  const sides = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
	const taken = [];
  if(topcikbelli === 1) this.matematiktopcik = 1
  if(topcikbelli === 2) this.matematiktopcik = 2

  if(this.matematiktopcik === 1) {
    const rakam1 = Math.random() * (100 - 1).toFixed()
    const rakam2 = Math.random() * (100 - 1).toFixed()
    const sonuç = rakam1 + rakam2
    const fixedlisonuç = sonuç.toFixed()
    let choice;
    await message.react('👌')
    await message.channel.send(stripIndents`
					${message.author}, :nerd: You have 15 seconds to anwser !
					\`\`\`
					${rakam1.toFixed()} + ${rakam2.toFixed()}
					\`\`\`
				`);
           let uwu = false;
            while (!uwu) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) return message.channel.send(`${message.author}, :shrug: Üzgünüm! Zaman doldu! Cevap: ${fixedlisonuç} :shrug:`)
                const choice = response.first().content
                if(isNaN(choice)) {
                  return message.channel.send(`${message.author}, :shrug: I canceled the command because you didn't use it correctly.`)
                }
                if (choice !== fixedlisonuç) return message.channel.send(`${message.author}, :shrug: Hatalı... Cevap: ${fixedlisonuç} :shrug:`)
                if (choice !== fixedlisonuç) {
                }
                if (choice == fixedlisonuç) uwu = true
                }
                if (uwu) {
                  await message.channel.send(`${message.author}, :tada: True! Reply: \`${fixedlisonuç}\` :tada:`)
                try {
            } catch(e) {
            message.channel.send('Something went wrong')
        }
    } else return console.log('Something went wrong')

    
  } else {
    if(this.matematiktopcik === 2) {
      const rakam1 = Math.random() * (100 - 1).toFixed()
    const rakam2 = Math.random() * (100 - 1).toFixed()
    const sonuç = rakam1 - rakam2
    const fixedlisonuç = sonuç.toFixed()
    let choice;
    await message.react('👌')
    await message.channel.send(stripIndents`
					${message.author}, :nerd: You have 15 seconds to anwser !
					\`\`\`
					${rakam1.toFixed()} - ${rakam2.toFixed()}
					\`\`\`
				`);
           let uwu = false;
            while (!uwu) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) return message.channel.send(`${message.author}, :shrug: Üzgünüm! Zaman doldu! Cevap: ${fixedlisonuç} :shrug:`)
                const choice = response.first().content
                if(isNaN(choice)) {
                  return message.channel.send(`${message.author}, :shrug: You didn't give me the right anwser so i canceled the command.`)
                }
                if (choice !== fixedlisonuç) return message.channel.send(`${message.author}, :shrug: Wrong anwser but lemme correct you : ${fixedlisonuç} :shrug:`)
                if (choice !== fixedlisonuç) {
                }
                if (choice == fixedlisonuç) uwu = true
                }
                if (uwu) {
                  await message.channel.send(`${message.author}, :tada: True anwser: \`${fixedlisonuç}\` :tada:`)
                try {
            } catch(e) {
            message.channel.send('Something went wrong')
        }
    } else return console.log('Something went wrong')
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["math",'matematik','test'],
  permLevel: 0
};

exports.help = {
    name: 'matematik',
  description: 'Rastgele matematik hesabı atar.',
  usage: 'matematik'
};