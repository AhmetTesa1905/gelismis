const {MessageEmbed} = require('discord.js')
const ayarlar = ('../ayarlar.json')

var prefix = ['ac!'];
var kurucuisim = ['Slipknot , BurakRS'];
var kurucuid = ['Slipknot: 407564231580581888 | \nBurakRS: 429611502836776980'];
var botadı = ['AngelBot'];
var version = ['2.0.7'];
var lisans = ['MIT'];

exports.run = (client, message, args) => {

    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Bot Hakkında")
        .setDescription(`[Botun Davet Linki](https://discordapp.com/oauth2/authorize?client_id=630383695265660948&scope=bot&permissions=2146958847) | [Botun Sistesi](https://angelbotweb.glitch.me)`)
        .addField("Prefix:", `${prefix}`, true)
        .addField("Komut Sayısı:", `${client.commands.size}`, true)
        .addField("Kurucu Adı:", `${kurucuisim}`, true)
        .addField("Kurucu ID:", `${kurucuid}`, true)
    .addField("Lisans:", `${lisans}`, true)
        .addField("Bot Adı:", `${botadı}`, true)
        .addField("Version:", `${version}`, true)
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "bot-hakkında"
}