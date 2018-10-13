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
client.user.setGame(`Commercial Business - الاعمال التجارة`)
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

