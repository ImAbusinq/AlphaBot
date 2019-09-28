const Discord = require('discord.js');
const bot = new Discord.Client();
const botname = 'AlphaUHC'
const serverip = 'play.AlphaUHC.com'
var YouTube = '0'
var AdministratorLogin = '0'
const AdministratorPassword = ''
const YouTubeModule = 'YouTube'
var Premium = ''
var HasPremium = '0'
var HasPremium = false
const token = ''

bot.on('ready', () =>{
    console.log(botname + ' is online!')
    bot.user.setActivity('on ' + serverip, { type: 'PLAYING'})
})

const PREFIX = '*';
const VERSION = 'VER 2.0.1';

bot.on('message',  message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('```\nPong!```')
            message.channel.send(Premium)
            break;
        case 'youtube':
            if(YouTube != '1') return message.reply('This module is disabled right now!')
            if(!args[1]) return message.reply("Choices: " + '```\niAbusinq```' + '```\nJustEpix```')
            if(args[1] === 'iAbusinq'){
                message.channel.send('https://tinyurl.com/ImAbusinq')
            }
            if(args[1] === 'JustEpix'){
                message.channel.send('https://tinyurl.com/JustEpix')
            }
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send(VERSION)
                message.channel.send(HasPremium)
            }
            if(args[1] === 'developer'){
                message.channel.send('Made By: @iAbusinq#4586')
            }
            break;
        case 'general':
            message.channel.send('*youtube (user): The YouTube channel of Developer and friends!')
            break;
        case 'help':
            if(!args[1]) return message.reply("Please define a subcategory! To find a subcatagory type *help all")
                if(args[1] === 'all'){
                    const helpall = new Discord.RichEmbed()
                    .setTitle('Command Help')
                    .setColor(0x00FFFF)
                    .addField("Help Catagories:", '```\nGeneral``` ```\nInfo``` ```\nAdmin``` ```\nUHC```')
                    .setTimestamp()
                    .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                    message.channel.send(helpall);
            }
            if(args[1] === 'general'){
                const helpgeneral = new Discord.RichEmbed()
                .setTitle('Command Help | General')
                .setColor(0x00FFFF)
                .addField("General Help:", '```\n*youtube iAbusinq: Links iAbusinq\'s YouTube channel!``` ```\n*youtube JustEpix: Links JustEpix\'s YouTube channel!```')
                .setTimestamp()
                .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                message.channel.send(helpgeneral)
            }
            if(args[1] === 'info'){
                const helpinfo = new Discord.RichEmbed()
                .setTitle('Command Help | Info')
                .setColor(0x00FFFF)
                .addField("Informational Help:", '```\n*info version: Lists the Version of the Bot!``` ```\n*info developer: Shows the developer of the Bot (iAbusinq#4586)```')
                .setTimestamp()
                .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                message.channel.send(helpinfo)}
            if(args[1] === 'admin'){
                if(!message.member.roles.find(r => r.name === "*admin")) return message.channel.send('You do not have permission to use this command!')
                    const helpadmin = new Discord.RichEmbed()
                    .setTitle('Command Help | Admin')
                    .setColor(0x00FFFF)
                    .addField("Administrator Help:", '```\n*purge #: Deletes a cirtain amount of messages. (# = Ammount Of Messages)``` ```\n*announcement (Announcement Name) (Announcement) (Server): Public announcement that notifys everyone online.``` ```\n*changelog (Link To Changes)``` ```\n*notify (username) (message) (@user): Notification targeted towards ONE person.``` ```\n*kick @(user) (reason): Kicks a user from the discord with the set reason.``` ```\n*ban @(user) (reason): Bans a user from the discord with the set reason.```')
                    message.channel.send(helpadmin)
            }
            if(args[1] === 'UHC'){
                if(!message.member.roles.find(r => r.name === "*UHC")) return message.channel.send('You do not have permission to use this command!')
                const helpuhc = new Discord.RichEmbed()
                .setTitle('Command Help | UHC')
                .setColor(0x00FFFF)
                .addField('UHC Help:', '```\n*creatematch (Host Name) (Minecraft Version) (Teams Size) (Server Size) (UHC.gg Link) (Scenarios [Seperate With -\'s])``` ```\n*ctm: Creates a Test Match (Exact same thing as *creatematch exept it doesn\'t @here!)```')
                message.channel.send(helpuhc)
            }
            break;
        case 'purge':
            if(!message.member.roles.find(r => r.name === "*admin")) return message.channel.send('You do not have permission to use this command!')
            if(!args[1]) return message.reply('Error! Please define a second argument!')
                message.channel.bulkDelete(args[1]).catch(err => {
                    message.reply('Error! I was unable to delete ' + args[1] + ' messages!');
                    console.log(err)
                })
                message.channel.send((args[1]) + ' Message(s) Were Deleted!')
            break;
        case 'announcement':
            if(!message.member.roles.find(r => r.name === "*admin")) return message.channel.send('You do not have permission to use this command!')
                if(!args[1]) return message.reply('Error! Please define a second argument!')
                    if(!args[2]) return message.reply('Error! Please define a third argument!')
                        if(!args[3]) return message.reply('Error! Please define a fourth argument! (server name)')
                            const announcement = new Discord.RichEmbed()
                            .setTitle('Announcement')
                            .setColor(0x00FFFF)
                            .setThumbnail(message.author.avatarURL)
                            .addField(args[1], args[2])
                            .addField(args[3], '| ' + message.guild.name + ' |')
                            .setFooter(message.author.username + " " + VERSION)
                            .setTimestamp()
                            message.channel.send(announcement);
                            message.channel.send('@here')
            break;
        case 'changelog':
            if(HasPremium === '0') return message.channel.send('```\nThis feature requires Premium!```')
            if(!message.member.roles.find(r => r.name === "*admin")) return message.channel.send('You do not have permission to use this command!')
                if(!args[1]) return message.reply('Error! Please define a second argument!')
                    const changelog = new Discord.RichEmbed()
                    .setTitle('Changelog')
                    .setColor(0x00FFFF)
                    .addField("UPDATE: " + VERSION, args[1])
                    .setTimestamp()
                    .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                    message.channel.send(changelog);
                    message.channel.send('@here')
            break;
        case 'notify':
            if(HasPremium === '0') return message.channel.send('```\nThis feature requires Premium!```')
            if(!message.member.roles.find(r => r.name === "*admin")) return message.channel.send('You do not have permission to use this command!')
                if(!args[1]) return message.reply('Error! Please define a second argument! (Name)')
                    if(!args[2]) return message.reply('Error! Please define a third argument! (Message)')
                        if(!args[3]) return message.reply('Error! Please define a fourth argument! (@user)')
                            const notify = new Discord.RichEmbed()
                            .setTitle('NOTIFICATION')
                            .setColor(0x00FFFF)
                            .addField('REQUESTED: ' + args[1], args[2])
                            .setTimestamp()
                            .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                            message.channel.send(notify);
                            message.channel.send(args[3])
            break;
        case 'kick':
            if(!message.member.roles.find(r => r.name === "*admin")) return message.channel.send('You do not have permission to use this command!')
                if(!args[1]) return message.reply('Error! Please specify a USER in the ' + message.guild.name + ' discord!')
                    if(!args[2]) return message.reply('Error! Please specify the reason for kicking the user!')
                        const userk = message.mentions.users.first();
                        if (userk) {
                            const member = message.guild.member(userk);
                            if (member) {
                                member.kick(args[2]).then(() => {
                                    const kickmsg = new Discord.RichEmbed()
                                    .setTitle('INFRACTION')
                                    .setColor(0xAA0000)
                                    .addField('Kicked User:', `${userk.tag}`)
                                    .addField('Reason:', args[2])
                                    .setTimestamp()
                                    .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                                    message.channel.send(kickmsg);
                                }).catch(err => {
                                    message.reply('Error! I was unable to kick this user!');
                                    console.log(err);
                                })
                            } else {
                                message.reply('You need to specify a USER in the ' + message.guild.name + ' discord!')
                        }
                    }
            break;
        case 'ban':
            if(!message.member.roles.find(r => r.name === "*B")) return message.channel.send('You do not have permission to use this command!')
                if(!args[1]) return message.reply('Error! Please specify a USER in the ' + message.guild.name + ' discord!')
                    if(!args[2]) return message.reply('Error! Please specify the reason for banning the user!')
                        const userb = message.mentions.users.first();
                        if (userb) {
                            const member = message.guild.member(userb);
                            if (member) {
                                member.ban(args[2]).then(() => {
                                    const banmsg = new Discord.RichEmbed()
                                    .setTitle('INFRACTION')
                                    .setColor(0xAA0000)
                                    .addField('Banned User:', `${userb.tag}`)
                                    .addField('Reason:', args[2])
                                    .setTimestamp()
                                    .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                                    message.channel.send(banmsg);
                                }).catch(err => {
                                    message.reply('Error! I was unable to ban this user!');
                                    console.log(err);
                                })
                            } else {
                                message.reply('You need to specify a USER in the ' + message.guild.name + ' discord!')
                        }
                    }
        case 'creatematch':
                if(HasPremium === '0') return message.channel.send('```\nThis feature requires Premium!```')
                if(!message.member.roles.find(r => r.name === "*UHC")) return message.channel.send('You do not have permission to use this command!')
                    if(!args[1]) return message.reply('Error! Please define a second argument! (Host Name)')
                    if(!args[2]) return message.reply('Error! Please define a third argument! (Minecraft Version)')
                    if(!args[3]) return message.reply('Error! Please define a fourth argument! (Teams Size)')
                    if(!args[4]) return message.reply('Error! Please define a fifth argument! (Server Size)')
                    if(!args[5]) return message.reply('Error! Please define a sixth argument! (UHC.gg Link)')
                    if(!args[6]) return message.reply('Error! Please define a seventh argument! (Scenarios) (SEPERATE WITH A - or a _)')
                    if(!args[7]) return message.reply('Error! Please define a seventh argument! Time Of Match')
                        const UHC = new Discord.RichEmbed()
                        .setTitle('UPCOMING MATCH')
                        .setColor(0x00FFFF)
                        .addField('HOST: ', args[1])
                        .addField('VERSION: ', args[2])
                        .addField('SIZE: ', args[3])
                        .addField('SLOTS: ', args[4])
                        .addField('UHC.GG POST: ', args[5])
                        .addField('SCENARIOS: ', args[6])
                        .addField('TIME: ', args[7])
                        .setTimestamp()
                        .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                        message.channel.send(UHC);
                        message.channel.send('@Feed')
            break;
        case 'ctm':
            if(HasPremium === '0') return message.channel.send('```\nThis feature requires Premium!```')
            if(!message.member.roles.find(r => r.name === "*UHC")) return message.channel.send('You do not have permission to use this command!')
                if(!args[1]) return message.reply('Error! Please define a second argument! (Host Name)')
                if(!args[2]) return message.reply('Error! Please define a third argument! (Minecraft Version)')
                if(!args[3]) return message.reply('Error! Please define a fourth argument! (Teams Size)')
                if(!args[4]) return message.reply('Error! Please define a fifth argument! (Server Size)')
                if(!args[5]) return message.reply('Error! Please define a sixth argument! (UHC.gg Link)')
                if(!args[6]) return message.reply('Error! Please define a seventh argument! (Scenarios) (SEPERATE WITH A - or a _)')
                if(!args[7]) return message.reply('Error! Please define a seventh argument! Time Of Match')
                    const testUHC = new Discord.RichEmbed()
                    .setTitle('UPCOMING MATCH')
                    .setColor(0x00FFFF)
                    .addField('HOST: ', args[1])
                    .addField('VERSION: ', args[2])
                    .addField('SIZE: ', args[3])
                    .addField('SLOTS: ', args[4])
                    .addField('UHC.GG POST: ', args[5])
                    .addField('SCENARIOS: ', args[6])
                    .addField('TIME: ', args[7])
                    .setTimestamp()
                    .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
                    message.channel.send(testUHC);
            break;
        case 'premium':
            if(HasPremium === '1') return message.reply('You already have premium!')
            if(HasPremium === true) return message.reply('You already have premium!')
            if(!args[1]) return message.reply('Error! Please enter your premium code! Ex: *premium (code)')
            if(args[1] != Premium) return message.reply('This is not a premium code!')
            else {
                HasPremium = '1'
                HasPremium = true
                YouTube = '1'
                message.reply('You now have Premium bot access!')
            }  
            break;
        case 'status':
            const PremiumStatus = new Discord.RichEmbed()
            .setTitle('Premium Information')
            .addField('Premium Status: ', HasPremium)
            .addField('How To Get Premium!', 'You must get your server verified by iAbusinq, and get a Premium code!')                
            .setTimestamp()
            .setFooter(message.author.username + ' | ' + message.guild.name + ' |')
            if(args[1] === 'premium') return message.channel.send(PremiumStatus)
            if(!args[1]) return message.reply(botname + ' is online')
        case 'login':
                if(!args[1]) return message.reply('Error! There was no password given! Please enter a password.')
                if(args[1] != AdministratorPassword) return message.reply('This is not a valid password!')
                else {
                YouTube = '1'
                AdministratorLogin = '1'
                HasPremium = '1'
                HasPremium = true
                message.channel.send('You are now logged into the administrator panel! All features are enabled!')
                }
                break;
        case 'logout':
                if(AdministratorLogin === '0') return message.reply('Error! You are not in administrator mode!')
                else {
                    HasPremium = '0'
                    HasPremium = false
                    AdministratorLogin = '0'
                    YouTube = '0'
                    message.reply('You have successfully logged out of the Administrator Panel!')
                    }
                break;
        case 'enableyoutube':         
                if(!args[1]) return message.reply('Error! There was no password given! Please enter a password.')
                if(args[1] != AdministratorPassword) return message.reply('This is not a valid password!')
                else {
                    message.channel.send('The module ' + YouTubeModule + ' is now enabled!')
                    YouTube = '1'
                }
                break;
        case 'disableyoutube':
            if(!message.member.roles.find(r => r.name === "*admin")) return message.channel.send('You do not have permission to use this command!')
            else {
                message.channel.send('The module ' + YouTubeModule + ' is now disabled!')
                YouTube = '0'
            }
            break;
    }
})

bot.login(token);
