const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embed = new MessageEmbed()
        .setColor("#9900CC")
        .setTitle("**Eğer komutlar ne işe yarıyor yada nasıl kullanılıyor diye merak ederseniz: https://angelbotbilgi.glitch.me**")   
        .addField("Destek Sunucusu:", `https://discord.gg/m9BqCWP`)          
       .addField("💻Komutlar **`ac!`** ", 
      "``bot-hakkında``, ``kullanıcılar``, ``ping``, ``sahibim``, ``sosyal-medya``, ``sunucubilgi``, ``üye-id``, ``websitemiz``, ``yapımcım``")
       .addField("AngelCraft NetWork", "``Bütün bot hakların`` <@407564231580581888> ``'a aittir.``")
    .setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
        message.channel.send(embed);
    };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yardım","help","halp","yardim","Yardım","Yardim","Help","Halp"],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
};