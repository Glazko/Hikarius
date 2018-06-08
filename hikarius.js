const Discord = require('discord.js'),
      dm = require('dm'),
      low = require('lowdb'),
      fs = require("fs"),
      FileSync = require('lowdb/adapters/FileSync'),
      client = new Discord.Client();
      
  
var prefix = "h!";
var token = (process.env.TOKEN);

client.on("ready", async () => {
    console.log("Bot prêt a utilisé !");
    client.user.setGame("Hikarius | h!help | Version 1.0.0", "https://www.twitch.tv/hikarius")
    client.user.setStatus("online")
}); 

client.on('message', message => {


//! Commandes Importantes du bot!\\

 if(message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setThumbnail("https://cdn.discordapp.com/attachments/450333866998366234/453962746778877964/logo_hikarius_png.png")
    .addField("**<:logohikariuspng:450625849662767104> Hikarius | Help**","_ _")
    .addField("**<:logohikariuspng:450625849662767104> | Utilitaires**","_ _")
    .addField("*h!hikarius*","Permet d'en savoir un peu plus sur le bot.")
    .addField("*h!info*","Permet de savoir des info sur ce serveur.")
    .addField("*h!invite*","Permet d'inviter le bot sur ton serveur.")
    .addField("_ _","_ _")
    .addField("**:beginner: | Modérations**","_ _")
    .addField("*h!ban <@utilisateur> [Raison]*","Permet de ban un utilisateur.")
    .addField("*h!kick <@utilisateur> [Raison]*","Permet de kick un utilisateur.")
    .addField("*h!un/mute <@utilisateur>*","Permet de unmute ou mute un utilisateur.")
    .addField("_ _","_ _")
    .addField("**:space_invader: | Divers**","_ _")
    .addField("*h!8ball [Texte]*","Permet de jouer et de poser des questions au bot")
    .addField("*h!sondage [Texte]*","Permet de faire un sondage grâce au bot.")    
    .addField("*h!say*","Permet de faire parler le bot.")
    message.author.send(help_embed)
    message.delete()

        var helps_embed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setThumbnail("https://cdn.discordapp.com/attachments/450333866998366234/453962746778877964/logo_hikarius_png.png")
        .addField("**:tada: | Fun**","_ _")
        .addField("*h!punch <@utilisateur>*","Permet de frapper un membre.")
        .addField("*h!kiss <@utilisateur>*","Permet d'embrasser un membre.")
        .addField("*h!hug <@utilisateur>*","Permet de caliner un membre.")
        .setFooter("© Hikarius, 2018")
        .setTimestamp()
        message.author.send(helps_embed);
        message.delete() 

        return message.channel.send("<:logohikariuspng:450625849662767104> | Mon menu d'aide ta été envoyer en privé. :mailbox_with_mail:")
    }


//if(message.content === prefix + "help"){
//var help_embed = new Discord.RichEmbed()
// .setColor("#FFFFFF")
// .addField("**<:logohikariuspng:450625849662767104> | Support**","**[Support](https://discord.gg/sAPqbsX)**")
//.setFooter("© Hikarius, 2018")
 //   .setTimestamp()
//  message.author.send(help_embed)
//message.delete()
//}

if(message.content === prefix + "hikarius"){
var hakirius_embed = new Discord.RichEmbed()
    .setColor("FFFFFF")
    .setThumbnail(message.author.avatarURL)
    .addField("**<:logohikariuspng:450625849662767104> Hikarius | Hikarius**","_ _")
    .addField("**Les développeurs :**"," GlAzKo#0300 et HelloDev | √ |#4021")
    .addField("**Mon language de codage :**","JavaScript")
    .addField("**Ma librairie :**","discord.js")
    .addField("**J'ai été crée le :**","29/05/2018")
    .addField("**Je suis actuellement sur :**",client.guilds.size + " serveurs")
    .addField("**Je compte actuellement :**",client.users.size + " utilisateurs")
    .setFooter("© Hikarius, 2018")
    .setTimestamp()
    message.channel.sendEmbed(hakirius_embed);
    message.delete()
}

if(message.content === prefix + "info"){
var info_embed = new Discord.RichEmbed()
 .setColor("FFFFFF")
 .addField("**<:logohikariuspng:450625849662767104> Hikarius | Info**","_ _")
 .setThumbnail(message.guild.iconURL)
 .addField("**Nom du Discord :**", message.guild.name)
 .addField("**Propriétaire du discord :**", message.guild.owner)
 .addField("**Crée le :**", message.guild.createdAt)
 .addField("**ID**", message.guild.id)
 .addField("**La région**", message.guild.region)
 .addField("**Tu as rejoint le :**", message.member.joinedAt)
 .addField("**Nombres de membres sur le Discord :**", message.guild.memberCount)
 .addField("**Nombres de rôles :**", message.guild.roles.size)
 .addField("**Nombres de channel :**", message.guild.channels.size)
 .addField("**Le salon AFK est le salon vocal :**", message.guild.afkChannel)   
 .setFooter("© Hikarius, 2018")
 .setTimestamp()
 message.channel.sendEmbed(info_embed);
 message.delete()
}

if(message.content === prefix + "invite"){
var invite_embed = new Discord.RichEmbed()
.setColor("FFFFFF")
.addField("**<:logohikariuspng:450625849662767104> Hikarius | Invite**","_ _")
.setThumbnail(message.client.avatarURL)
.addField("**Voici le lien de Hikarius !**","**[<:logohikariuspng:450625849662767104> Hikarius](https://discordapp.com/api/oauth2/authorize?client_id=450051278241005569&permissions=272104535&scope=bot)**")
.setFooter("© Hikarius, 2018")
 .setTimestamp()
 message.author.send(invite_embed)
 message.delete

 return message.channel.send("<:logohikariuspng:450625849662767104> | Tu as reçu mon lien pour m'inviter, va voir dans tes messages privés :mailbox_with_mail:")
}

if(message.content.startsWith(prefix +'ban')){
    if (message.channel.type === "dm") return;
    let bReason = message.content.split(" ").slice(19);
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))  return message.reply("<:logohikariuspng:450625849662767104> | Vous n'avez pas les permissions de faire ceci.").catch(console.error);
    if(message.mentions.users.size === 0) {
      return message.channel.send("<:logohikariuspng:450625849662767104> | Vous devez mentionner un utilisateur !");
    }
    let banMember = message.guild.member(message.mentions.users.first());
    if(!banMember) {
      return message.channel.send("<:logohikariuspng:450625849662767104> | Je ne suis pas sur que cet utilisateur existe...");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return message.reply("<:logohikariuspng:450625849662767104> | Je n'ai pas la permission de faire ceci").catch(console.error);
    }
             
    banMember.ban().then(member => {
        var embed = new Discord.RichEmbed()
            .setColor("#FFFFFF")
            .setThumbnail("https://cdn.discordapp.com/attachments/447870042034536484/451412203187470361/ban.gif")
            .addField("Un utilisateur a été kick !", "L'utilisateur kick " + member.user.tag)
            .addField("Modérateurs ou Administrateur qui a kick : ", `${message.author}`)
            .addField("Raison du kick :" , bReason)
            .addField("Heure du kick : ", message.createdAt)
            .addField("Channel du kick : ", message.channel)
            .setFooter("© Hikarius, 2018")
            .setTimestamp()
             message.member.guild.channels.find("name", "logs").sendEmbed(embed)
            message.delete();
    });
          

}
    
if(message.content === prefix +"kick"){
    if (message.channel.type === "dm") return;
    let kReason = message.content.split(" ").slice(19);
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))  return message.reply("<:logohikariuspng:450625849662767104> | Vous n'avez pas les permissions de faire ceci.").catch(console.error);
    if(message.mentions.users.size === 0) {
     return message.channel.send("<:logohikariuspng:450625849662767104> | Vous devez mentionner un utilisateur !");
}
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
    return message.channel.send("<:logohikariuspng:450625849662767104> | Je ne suis pas sur que cet utilisateur existe...");
}
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("<:logohikariuspng:450625849662767104> | Je n'ai pas la permission de faire ceci").catch(console.error);
    message.delete()
}
                 
    kickMember.kick().then(member => {
            var embed = new Discord.RichEmbed()
            .setColor("#FFFFFF")
            .setThumbnail("https://cdn.discordapp.com/attachments/447870042034536484/451412203187470361/ban.gif")
            .addField("Un utilisateur a été kick !", "L'utilisateur kick " + member.user.tag)
            .addField("Modérateurs ou Administrateur qui a kick : ", `${message.author}`)
            .addField("Raison du kick :" , kReason)
            .addField("Heure du kick : ", message.createdAt)
            .addField("Channel du kick : ", message.channel)
            .setFooter("© Hikarius, 2018")
            .setTimestamp()
             message.member.guild.channels.find("name", "logs").sendEmbed(embed)
            message.delete();
});
}

if(message.content === prefix + "clear"){
    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:logohikariuspng:450625849662767104> | Tu n'as pas la permission de faire ceci.")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:logohikariuspng:450625849662767104> | Je n'ai pas la permission de faire ceci.")
    let args = message.content.split(" ").slice(1);
    if(!args[0]) return message.channel.send("<:logohikariuspng:450625849662767104> | Indique un nombre entre 1 et 100 pour que je puisse clear.");
    if(args[0] >= 100) return message.channel.send("<:logohikariuspng:450625849662767104> | Veuillez choisir un nombre en dessous de 100.");
    message.channel.bulkDelete(args[0])
}

//! Les commandes "fun" !\\

if (message.content.startsWith(prefix + "sondage")) {
                        
let args = message.content.split(" ").slice(1);
let thingToEcho = args.join(" ")
var sondage_embed = new Discord.RichEmbed()
.setColor("FFFFFF")
.setThumbnail(message.author.avatarURL)
.addField("**<:logohikariuspng:450625849662767104> Hikarius | Sondage**","_ _")
.addField(message.author.username + " a fait un sondage, voter vite !","_ _")
.addField("► " + thingToEcho, "_ _")
.setFooter("© Hikarius, 2018")
.setTimestamp()
message.delete()
message.channel.sendEmbed(sondage_embed)
.then(function (message) {
    message.react("✅")
    message.react("❌")
});
}

if(message.content === prefix + 'avatar') {
let user = message.mention.user.first() || message.author;

var embed = new Discord.RichEmbed()
.setAuthor(`${user.username}`)
.addField("**Voici ton avatar !**", "_ _")
.setImage (user.displayAvatarURL)
.setColor('#FFFFFF')
.setFooter("© Hikarius, 2018")
.setTimestamp()
message.channel.send(embed)
message.delete()
}

if(!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){    
        return message.reply("Merci de poser une question ! :8ball:")};
        var replys = [
            "Oui",
            "Non",
            "Je sais pas",
            "Peut être",
            "Surement"
        ];
        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var ball_embed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .addField("**<:logohikariuspng:450625849662767104> Hikarius | 8ball**","_ _")
        .addField(message.author.username + " a posé une question :", tte + "_ _")
        .addField("Je répond ceci:",reponse)
        .setFooter("© Hikarius, 2018")
        .setTimestamp()
        message.channel.sendEmbed(ball_embed)
        message.delete()
        break;

        case "hug":

        var replys = [
            "https://cdn.discordapp.com/attachments/450333866998366234/454032596884783104/giphy.gif",
            "https://cdn.discordapp.com/attachments/450333866998366234/454032811540742154/raw.gif",
            "https://cdn.discordapp.com/attachments/442030774976249857/454271323628371968/giphy_1.gif",
            "https://cdn.discordapp.com/attachments/442030774976249857/454271364426104833/giphy_2.gif",
            "https://cdn.discordapp.com/attachments/442030774976249857/454271392553369611/giphy_3.gif",
            "https://cdn.discordapp.com/attachments/442030774976249857/454271633037983746/raw_1.gif",
            "https://cdn.discordapp.com/attachments/442030774976249857/454271764785266708/giphy_4.gif",
            "https://cdn.discordapp.com/attachments/442030774976249857/454271918527348736/giphy_5.gif"
        ];

        let hug = (replys[Math.floor(Math.random() * replys.length)])
        var mention = message.mentions.users.first()
           if(!mention) {
             return message.channel.send("<:logohikariuspng:450625849662767104> | Je ne suis pas sur que cet utilisateur existe...");
        }
        var hug_embed = new Discord.RichEmbed()

           .addField(":heart: " + message.author.username + " **a caliné** " + mention.username,"_ _")
           .setImage(hug)
           .setColor('#FFFFFF')
           .setFooter("© Hikarius, 2018")
           .setTimestamp()
           message.channel.sendEmbed(hug_embed)
        message.delete()

        break;

        case "kiss":

        var replys = [
           "https://cdn.discordapp.com/attachments/442030774976249857/454273944862851083/giphy_6.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454273999321432065/giphy_7.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454274061107724289/giphy_8.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454274143148310538/giphy_9.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454274208667795476/giphy_10.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454274271221383188/giphy_11.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454274733530415104/11e01b02a863643bc41effbdfc950013f411f7c1_hq.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454274861729316866/tumblr_n473d8T0WX1t0q458o1_500.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454275029300019200/giphy_13.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454275332959240223/tenor.gif"
        ];

        let kiss = (replys[Math.floor(Math.random() * replys.length)])
        var mention = message.mentions.users.first()
           if(!mention) {
             return message.channel.send("<:logohikariuspng:450625849662767104> | Je ne suis pas sur que cet utilisateur existe...");
        }
        var kiss_embed = new Discord.RichEmbed()

           .addField(":kiss: " + message.author.username + " **a embrassé** " + mention.username,"_ _")
           .setImage(kiss)
           .setColor('#FFFFFF')
           .setFooter("© Hikarius, 2018")
           .setTimestamp()
           message.channel.sendEmbed(kiss_embed)
        message.delete()

        break;

        case "punch":

        var replys = [
           "https://cdn.discordapp.com/attachments/442030774976249857/454278110062313472/1.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278123098341376/2.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278160138108928/3.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278164386938880/4.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278182015860736/5.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278196011991050/6.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278225473044480/7.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278245622349834/8.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278257563402240/9.gif",
           "https://cdn.discordapp.com/attachments/442030774976249857/454278278962741248/10.gif"
        ];

        let punch = (replys[Math.floor(Math.random() * replys.length)])
        var mention = message.mentions.users.first()
           if(!mention) {
             return message.channel.send("<:logohikariuspng:450625849662767104> | Je ne suis pas sur que cet utilisateur existe...");
        }
        var punch_embed = new Discord.RichEmbed()

           .addField(":punch: " + message.author.username + " **a frappé** " + mention.username,"_ _")
           .setImage(punch)
           .setColor('#FFFFFF')
           .setFooter("© Hikarius, 2018")
           .setTimestamp()
           message.channel.sendEmbed(punch_embed)
        message.delete()
    }

    if(message.content.startsWith(prefix + 'ping')) {
        message.channel.send (":ping_pong: Pong ...").then((message) => {
        message.edit(`🏓 Pong ! La latence est de ${message.createdTimestamp - Date.now()} ms et la latence de L'API est de ${Math.round(client.ping)} ms`);
        });
    }
    
     if (message.content.split(" ")[0] == prefix + "say")
    
{
  message.delete().catch(function() {return 0});
  return message.channel.send(message.content.split(" ").splice(1).join(" ")).catch(function() {return 0});
  message.delete()
}

if(message.content.startsWith(prefix + 'setConfig')) {
message.guild.createRole({
    name: 'Muted', 
    color: '#0a0a0a',
    mentionable: false,
    ADD_REACTIONS: false, 
    SEND_MESSAGES: false})
    message.delete()
}

if(message.content.startsWith(prefix + 'setConfig')) {   
message.guild.createChannel('logs', 'logs');   
message.channel.sendMessage(":warning: | Le channel 'logs' et le rôle @Muted ont bien été mis a jour.")
message.delete()
}
if(message.content === prefix + "sarah"){
 message.channel.send("Qui Sarah tu la connais pas ? C'est la développeuse du bot 'Batônnet' si si ta bien compris :D C'est une personne super *suce* nan je déconne. N'hésite pas à inviter son bot :smiley: !")
              message.delete()
 }

//! Les commandes en développement !\\

if (message.content === prefix + "mute"){
message.channel.send(":warning: | Commande en développement !")
}

if(message.content === prefix + "draco"){
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
      message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
      message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
message.channel.send ("Le bot de Draco est nul !")
}
});

client.login(token)
