const Discord = require('discord.js')

client = new Discord.Client();

var prefix = "ns!";
var token = (process.env.TOKEN);

client.on("ready", async () => {
    console.log("Bot prêt a utilisé !");
    client.user.setGame("Noctys | 0.0.1", "https://www.twitch.tv/hikarius")
    
    client.on('message', message => {
        
    if(message.content.startsWith(prefix + "aide")){
            var aide_embed = new Discord.RichEmbed()
            
            .setColor("#DF013A")
            .setThumbnail("https://cdn.discordapp.com/attachments/442030110711742474/455758629921095721/logo.png")
            .addField("Noctys | Menu d'aide","_ _")
            .addField("**🛠 Administration**","*setConfig,ban,kick,sondage,annonce*")
            .setFooter("© Noctys, 2018")
            .setTimestamp()
            message.author.send(aide_embed)

            return message.channel.send("Mon menu d'aide ta été envoyer en privé. :mailbox_with_mail:")
        }

        if(message.content.startsWith(prefix + 'setConfig')) {
            if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))  return message.reply("Vous n'avez pas les permissions de faire ceci.").catch(console.error);
            message.guild.createRole({
                name: 'Muted', 
                color: '#0a0a0a',
                mentionable: false,
                ADD_REACTIONS: false, 
                SEND_MESSAGES: false})
                message.delete()
            }
            
            if(message.content.startsWith(prefix + 'setConfig')) {if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
            message.guild.createChannel('logs', 'logs');   
            message.channel.sendMessage(":warning: | Le channel `logs` et le rôle `Muted` ont bien été mis a jour.")
            message.delete()
            }
        
        if(message.content === prefix + "si"){
var info_embed = new Discord.RichEmbed()
 .setColor("#DF013A")
 .addField(" **Noctys | Serveur Info**","_ _")
 .addField("**Nom du Discord :**", message.guild.iconURl + message.guild.name)
 .addField("**Propriétaire du discord :**", message.guild.owner)
 .addField("**ID :**", message.guild.id)
 .addField("**Région :**", message.guild.region)
 .addField("**Nombres Membres :**", message.guild.memberCount)
 .addField("**Nombres de rôles :**", message.guild.roles.size)
 .addField("**Nombres de channel :**", message.guild.channels.size)
 .addField("**Le salon AFK :**", message.guild.afkChannel)   
 .setFooter(message.client.icon + " © Noctys, 2018")
 .setTimestamp()
 message.channel.sendEmbed(info_embed);
 message.delete()
}

            if (message.content.startsWith(prefix + "sondage")) {
                        
                let args = message.content.split(" ").slice(1);
                let thingToEcho = args.join(" ")
                var sondage_embed = new Discord.RichEmbed()
                .setColor("FFFFFF")
                .setThumbnail("https://cdn.discordapp.com/attachments/442030110711742474/455758629921095721/logo.png")
                .addField("**Noctys | Sondage**","_ _")
                .addField(message.author.username + " a fait un sondage, voter vite !","_ _")
                .addField("► " + thingToEcho, "_ _")
                .setFooter("© Noctys, 2018")
                .setTimestamp()
                message.delete()
                message.channel.sendEmbed(sondage_embed)
                .then(function (message) {
                    message.react("✅")
                    message.react("❌")
                });
                }

        if(message.content.startsWith(prefix +'ban')){
            if (message.channel.type === "dm") return;
            let bReason = message.content.split(" ").slice(19);
            if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))  return message.reply("Vous n'avez pas les permissions de faire ceci.").catch(console.error);
            if(message.mentions.users.size === 0) {
              return message.channel.send("Vous devez mentionner un utilisateur !");
            }
            let banMember = message.guild.member(message.mentions.users.first());
            if(!banMember) {
              return message.channel.send("Je ne suis pas sur que cet utilisateur existe...");
            }
            if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
              return message.reply("Je n'ai pas la permission de faire ceci").catch(console.error);
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
                    .setFooter("© Noctys, 2018")
                    .setTimestamp()
                     message.member.guild.channels.find("name", "logs").sendEmbed(embed)
                    message.delete();
            });
                  
        
        }
            
        if(message.content.startsWith(prefix +'kick')){
            if (message.channel.type === "dm") return;
            let kReason = message.content.split(" ").slice(19);
            if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))  return message.reply("<:logohikariuspng:450625849662767104> | Vous n'avez pas les permissions de faire ceci.").catch(console.error);
            if(message.mentions.users.size === 0) {
             return message.channel.send("Vous devez mentionner un utilisateur !");
        }
            let kickMember = message.guild.member(message.mentions.users.first());
            if(!kickMember) {
            return message.channel.send("Je ne suis pas sur que cet utilisateur existe...");
        }
            if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permission de faire ceci").catch(console.error);
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
                    .setFooter("© Noctys, 2018")
                    .setTimestamp()
                     message.member.guild.channels.find("name", "logs").sendEmbed(embed)
                    message.delete();
        });
        }});
});

client.login(token)
