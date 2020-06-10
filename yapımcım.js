const {MessageEmbed} = require('discord.js')

exports.run = (client, message) => {

    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle(":bell: Sahibimin Social Media Hesapları!")
        .addField("<:discord:685730338013708289> Discord:", `<@407564231580581888>\n <@429611502836776980> - Slipknot#1552\n BurakRS#0580`, true)
        .addField("<:insta:685730338164572193> İnstagram:", `https://www.instagram.com/angelcraftnw/`, true)
        .addField("<:twitch:685730337862451237> Twitch:", `https://www.twitch.tv/angelcraftnw`, true)
        .addField("<:yt:685730337976090659> Youtube:", `https://www.youtube.com/c/AngelCraftNW`, true)
        .addField("<:site:686974058520117358> Website:", `https://angelbotweb.glitch.me`, true)
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "yapımcım"
}