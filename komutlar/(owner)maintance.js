const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
  
  if(message.author.id != "725788906418733096","636573504598442084") return
  
  if(!args[0]) return message.channel.send('wrong')
  
  if(args[0] === 'on') {
    if(db.fetch(`bakim`)) return message.channel.send('Already on.')
    message.channel.send('On.')
    db.set(`bakim`, 'acik')
  }
  if(args[0] === 'off'){
    if(!db.fetch(`bakim`)) return message.channel.send('Already off.')
    message.channel.send('off')
    db.delete(`bakim`)
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['maintance'],
  permLevel: 0
}

exports.help = {
  name: 'bakım'
}
