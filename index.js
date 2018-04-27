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

client.login('NDM4NzE4OTU3NDUzNTc0MTQ2.DcSsag.D7vQwdv_ELMewnL9O0lPzTsSd1M');client.on('message', msg => {
  if (msg.content === '*Developerbot') {
    msg.reply('𝙎𝙝𝙖𝙝𝙖𝙧 | 𝙏𝙝𝙚𝘼𝙣𝙩#0139');
 
  }
});
client.login('NDM4NzE4OTU3NDUzNTc0MTQ2.DcSsag.D7vQwdv_ELMewnL9O0lPzTsSd1M');client.on('message', msg => {
  if (msg.content === '*invitebot') {
    msg.reply('https://discordapp.com/api/oauth2/authorize?client_id=438718957453574146&permissions=8&scope=bot');
 
  }

  

bot.login(process.env.BOT_TOKEN);
