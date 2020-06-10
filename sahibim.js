const {MessageEmbed} = require('discord.js')
const ayarlar = require('../ayarlar.json')

var owner = ayarlar.sahip;

exports.run = (client, message) => {

const embed = new MessageEmbed()

.setColor('RANDOM')
.setTitle("O İşte Benim Sahibim")
.addField("Sahibim:", `<@${ayarlar.sahip}>`)
.setFooter(`AngelBot v1.2`)
message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnyl: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "sahibim"
}