const {MessageEmbed} = require('discord.js')

exports.run = (client, message) => {
    var user = message.mentions.users.first()
    if (!user) return message.reply("Birisini etiketlemelisin!")

    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Kullanıcının Bilgileri:")
        .addField("Üye Ad:", `${user.username}`)
        .addField("Üye ID",  `${user.id}`)
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guidlOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "üye-id"
}