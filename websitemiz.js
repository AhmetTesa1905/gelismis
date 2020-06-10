const {MessageEmbed} = require('discord.js')

exports.run = (client, message) => {

    const embed = new MessageEmbed()

    .setColor('RANDOM')
    .setTitle("Websitemiz")
    .addField("Botumuzun Sitesi:", `https://angelbotweb.glitch.me`)
    .addField("Botlistimizin Sitesi:", `https://codebookbotlist.glitch.me`)
    .addField("Kod Paylaşım Sitemiz:", `https://codebookcodeshare.glitch.me`)
    .addField("Hastebin Sitemiz:", `https://angelhastebin.glitch.me`)
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "websitemiz"
}