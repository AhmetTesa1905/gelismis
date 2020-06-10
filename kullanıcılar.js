const {MessageEmbed} = require('discord.js')

exports.run = async (cleint, message, bot, args) => {

    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let sesliler = 0;
    for (const [id, voiceChannel] of voiceChannels) sesliler += voiceChannel.members.size;
    let uyeler = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let toplamuye = uyeler - botlar;

    const embed = new MessageEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .addField("Toplam Kullanıcılar:", `**${uyeler}**`)
        .addField("Üyeler:", `**${toplamuye}**`)
        .addField("Botlar:", `**${botlar}**`)
        .addField("Çevrimiçi üye sayısı", `**${message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}**`)
        .addField("Çevrimdışı üye sayısı", `**${message.guild.members.filter(off => off.presence.status === 'offline').size}**`)
        .addField("Seslideki Üye Sayısı:", `**${sesliler}**`)
        .addField("Üyele Durumu:", `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Çevrimiçi\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Boşta\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı-Gizli`)
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "kullanıcılar"
}