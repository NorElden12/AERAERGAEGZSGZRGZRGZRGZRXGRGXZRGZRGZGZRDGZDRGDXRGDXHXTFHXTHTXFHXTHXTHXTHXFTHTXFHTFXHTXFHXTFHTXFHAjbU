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
client.user.setGame(`-help | -inv  `)
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


























client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **

╔[❖════════════❖]╗
             Prefix = ' - '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝
 ❖صيانة

 ❖صيانة
 
 ❖صيانة

 ❖صيانة

 ❖صيانة
 
 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة

╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة
 

╔[❖════════════❖]╗
           Games Commands 
╚[❖════════════❖]╝

 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة

 ❖صيانة






==================================================================

bot invite link: https://discordapp.com/oauth2/authorize?client_id=462182249144516638&permissions=2080374975&scope=bot 

==================================================================

`);

    }
});













//Admin





client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة :  يجب ان يكون لديك برمشن أداري . ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة : يجب ان يكون البوت لديه برمشن أداري').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return message.reply('# - ملحوظة : يجب ان تقوم بمنشن شخص معين .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('# - ملحوظة : لا يمكنك اعطاء ميوت لشخص اعلي من رتبتك .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('# - ملحوظه : لا يمكنك اعطاء ميوت لشخص اعلي من رتبتك').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('# - ملحوظه : لا يمكنك ان تعطي ميوت لنفسك .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let duration = args[2];
    if(!duration) return message.reply('# - ملحوظه : يجب ان تضع وقت .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration)) return message.reply('# - ملحوظه : يجب تحديد وقت زمني صحيح').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let sbb = message.content.split(" ").slice(3).join(" ");
    if(!sbb) sbb = "غير معروف .";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('# - لقد تم أعطائك ميوت .')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Muted ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted **   `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة :  يجب ان يكون لديك برمشن أداري . ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('# - ملحوظة : يجب ان يكون البوت لديه برمشن أداري').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!mention) return message.reply('# - ملحوظه : يجب منشن شخص لفك الميوت عنهه .').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted ! **  `);
  }
});































client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "اخفاء") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});













































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
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcall')){
 if (message.author.id !== '484400091294334978') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
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

