const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot is Online!`);
  client.user.setGame(`${client.guilds.size} servers | *help`);
});

// Updates the bot's status if he joins a server
client.on("guildCreate", guild => {
   client.user.setGame(`${client.guilds.size} servers | *help`);
});

/// Updates the bot's status if he leaves a servers
client.on("guildDelete", guild => {
    client.user.setGame(
        `${client.guilds.size} servers | *help`);
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let prefix = process.env.BOT_PREFIX;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if (cmd === `${prefix}help`){
 return message.channel.send("I want help you,but how?!");
  }
if (cmd === `${prefix}Developerbot`){
 return message.channel.send("𝙎𝙝𝙖𝙝𝙖𝙧 | 𝙏𝙝𝙚𝘼𝙣𝙩#0139");
 
  }
if (cmd === `${prefix}invitebot`){
  return message.channel.send("Invite the bot to your server :wink: https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=0");
  }
if (cmd === `${prefix}say`){
  		message.delete()
          const embed = new Discord.RichEmbed()
  		.setColor(0x954D23)
  		.setDescription(args.join(" "));
  		message.channel.send({embed})
 }
  if(cmd === `${prefix}sondage`){
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            if (!thingToEcho) return message.reply("Merci d'envoyer une question pour le sondage")
            if (!message.guild.channels.find("name", "sondage")) return message.reply("Le channel sondage est introuvable. merci de crée ce channel pour que celui-ci marche.")
            var embedeee = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0xB40404")
                .setTimestamp()
        message.channel.sendMessage("Votre sondage a bien été envoyé dans #sondage.")
        message.guild.channels.find("name", "sondage").sendEmbed(embedeee)
        .then(function (message) {
            message.react(":white_check_mark:")
            message.react(":x:")
        }).catch(function() {
        }
});
  

client.login(process.env.BOT_TOKEN);
