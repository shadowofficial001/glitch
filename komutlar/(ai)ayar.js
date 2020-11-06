const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Im having second thoughts`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Sorry, hades only..')

  if (args[0] == 'activate') {
    db.set(`ssaass_${message.guild.id}`, 'activate').then(i => {
      message.channel.send(`Nether has risen, please do not use ? at the end of your sentences`)
    })
  }
  if (args[0] == 'close') {
    db.set(`ssaass_${message.guild.id}`, 'close').then(i => {
      message.channel.send(`Nether has fallen.`)
    })
  }

}
//codare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ai'],
  permLevel: 0,
  kategori: "Ayarlar"
};

exports.help = {
  name: 'sa-dfgfdsas',
  description: 'Sa As adsfsdgyarlarsın.',
  usage: 'sa-gsdfgas'
};