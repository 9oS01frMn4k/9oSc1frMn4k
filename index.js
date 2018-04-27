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
  message.reply('Check Your Dm Message :wink:');

   message.author.send(`${prefix}serverinfo - info about the server\n\
*say(text)- Antman say everything
*invitebot-invite me!
*Developerbot-who create me??
*help-this command`);
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
});
  

client.login(process.env.BOT_TOKEN);
