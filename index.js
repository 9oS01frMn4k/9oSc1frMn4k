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
if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(Cleared ${args[0]} messages.).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
});
  

client.login(process.env.BOT_TOKEN);
