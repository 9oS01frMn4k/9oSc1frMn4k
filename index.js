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

   if (cmd === `${prefix}Developerbot`){
  message.reply(':ant:𝙎𝙝𝙖𝙝𝙖𝙧 | 𝙏𝙝𝙚𝘼𝙣𝙩:ant:#0139');
   }
 if (cmd === `${prefix}invite`){
   message.reply('Invite the bot to your server :wink: https://discordapp.com/oauth2/authorize?client_id=438718957453574146&permissions=8&scope=bot%27');
 }

  

bot.login(process.env.BOT_TOKEN);
