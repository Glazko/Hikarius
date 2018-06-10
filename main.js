const Discord = require('discord.js')

client = new Discord.Client();

var prefix = "ns!";
var token = (process.env.TOKEN);

client.on("ready", async () => {
    console.log("Bot prêt a utilisé !");
    client.user.setGame("Noctys | 0.0.1", "https://www.twitch.tv/hikarius")

});

client.login(token)
