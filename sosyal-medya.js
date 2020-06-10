const {MessageEmbed} = require('discord.js');

exports.run = (client, message) => {
  
  const codebookxir = new MessageEmbed()
  .setColor('GREEN')
  .setTitle("Sosyal Medya Hesaplarımız")
  .setDescription(`[Botu Davet Et](https://angelbotweb.glitch.me)`)
  .addField("Sosyal Medya Hesapları:", "[Youtube](https://www.youtube.com/c/AngelCraftNW)\n [Discord için ac!discord]\n [İnstagram](https://www.instagram.com/angelcraftnw/)")
  .setFooter(`Sosyal Medyadan Bizi Takip Etmeyi Unutmayın!`)
  message.channel.send(codebookxir)
}
exports.conf = {
  enbaled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "sosyal-medya"
}