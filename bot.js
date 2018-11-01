const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const { PREFIX, GOOGLE_API_KEY } = require('./config');
const prefix = '-'
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const moment = require('moment');
const fs = require("fs");




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`صيانة`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});























            
	
		 














//Admin












































client.on('message', message => {
    var prefix = "-"
      if (message.content.startsWith(prefix + 'ann')) {
        let code = message.content.split(" ").slice(2).join(" ")
        let supportrole = message.guild.member(message.author).roles.find('name', 'ann' );
        if(!supportrole) return message.reply('ما عندك الرتبة المطلوبة')
        if(!code) return message.channel.send(`اكتب الا`)
        let applychannel = message.guild.channels.find(`name`,'announcements')
        if(!applychannel) return message.channel.send("ما في روم كتابي")
        
        applychannel.send(`@everyone , @here
         تم النشر بواسطة: ${message.author} \`\`\`js
  ${code}\`\`\``).then((pp)=> {
      pp.react("☑")
      pp.react("❌")
      pp.react("💓")
  })
      }});














if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "-" ; // البرفكس 

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }     
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user); 
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
}) 
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);










client.on('message', message => {
    var prefix = "-"
      if (message.content.startsWith(prefix + 'an-')) {
        let code = message.content.split(" ").slice(2).join(" ")
        let supportrole = message.guild.member(message.author).roles.find('name', 'ann');
        if(!supportrole) return message.reply('ما عندك الرتبة المطلوبة')
        if(!code) return message.channel.send(`اكتب الوصف`)
        let applychannel = message.guild.channels.find(`name`,'announcements')
        if(!applychannel) return message.channel.send("ما في روم كتابي")
        
        applychannel.send(`@everyone , @here
         تم النشر بواسطة: ${message.author} 
  ${code}`).then((pp)=> {
      pp.react("☑")
      pp.react("❌")
      pp.react("💓")
  })
      }});













client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
 
    

if(message.content.startsWith(prefix + 'bot')) {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Servers🌐 ${client.guilds.size}
Users👥 ${client.users.size}
Channels📚 ${client.channels.size} `)
        message.channel.sendEmbed(embed);
    }
 
});












client.on('message', message => {
    let prefix = '-';
    let supportRoleName = 'الدعم الفني ..';
    let channelName = ' التقديمات';
    let db = {};
    if(!message.author.bot && message.content.split(' ')[0] == `${prefix}تقديم`) {
        if(message.guild.member(message.author).roles.has(message.guild.roles.find('name', supportRoleName).id)) {return message.reply(`**انت تملك رتبة مسبقا لايمكن ان تقدم عليها من جديد**`)} else {
            db[message.author.id] = {};
            message.channel.send(`${message.author}, **يجب عليك الان ادخال لغات البرمجة التي تعرفها**`).then(mssg => {
            message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max:1,time:100000,errors:['time']}).then(msg1 => {msg1 = msg1.first();msg1.delete(); db[message.author.id]['lg'] = msg1.content
            mssg.edit(`${message.author}, **ادخل مدة خبرتك في البرمجة**`);
            message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max:1,time:100000,errors:['time']}).then(msg2 => {msg2 = msg2.first();msg2.delete(); db[message.author.id]['te'] = msg2.content
            mssg.edit(`${message.author}, **ماذا سوف تقدم لو جائتك الرتبة ؟**`);
            message.channel.awaitMessages(msg => msg.author.id == message.author.id, {max:1,time:100000,errors:['time']}).then(msg3 => {msg3 = msg3.first();msg3.delete(); db[message.author.id]['wtm'] = msg3.content
            mssg.delete();
            message.guild.channels.filter(c => c.type == 'text').find('name', channelName).send({
                embed: new Discord.RichEmbed().setTitle(message.author.id).setColor('RANDOM').setDescription(`**
اللغة البرمجية
${db[message.author.id]['lg']}
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
مدة ممارسة هذه اللغة
${db[message.author.id]['te']}
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
سيقدم وهو سبورت :
${db[message.author.id]['wtm']}
تم التقديم على رتبة السبورت بوآسطة : ${message.author}
**`)});
        });
        });
        });
        });
        };
    };
});











 client.login(process.env.BOT_TOKEN);

