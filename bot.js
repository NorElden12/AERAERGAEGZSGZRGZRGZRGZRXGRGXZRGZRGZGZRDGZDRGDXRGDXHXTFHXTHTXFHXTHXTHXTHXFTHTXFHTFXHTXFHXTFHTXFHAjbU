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





client.on("message", async msg => {
 
    if (msg.channel.type !== "text") return undefined;
 
    //if (msg.auhtor.bot) return undefined;
 
    var args = msg.content.split(" ")
 
    var prefix = "!"
 
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
 
      var mentions = msg.mentions.users.first() || msg.guild.members.get(args[1]);
      var username = msg.guild.members.filter(m => m.user.username.toLowerCase().includes(args[1]))
      var id = msg.guild.members.filter(m => m.user.id.toLowerCase().includes(args[1]))
      if (!args[1]) return undefined;
      if(!msg.guild.members.get(msg.author.id).hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You lack permissions.")
      if(!msg.guild.members.get(client.user.id).hasPermission("MANAGE_MESSAGES")) return msg.channel.send("I lack permissions.")
      if(!mentions && username.size == 0) return msg.channel.send('I couldnt find the user');
      if(!mentions && username.size > 1) return msg.channel.send(`I found too much members with **${args[1]}**`);
      if(mentions) {
      try {
        await msg.guild.channels.forEach(c => {
          c.overwritePermissions(mentions, {
            SEND_MESSAGES: false,
            ATTACH_FILES : false,
            ADD_REACTIONS : false,
          })
        })
        await msg.channel.send(`${mentions.user.username} muted ,-,`)
      } catch (e) {
        console.log(e.stack);
      }
      }
    if (username.size == 1) {
      try {
        await msg.guild.channels.forEach(c => {
          c.overwritePermissions(msg.guild.members.find(m => m.user.username.toLowerCase().includes(args[1])).id, {
            SEND_MESSAGES: false,
            ATTACH_FILES : false,
            ADD_REACTIONS : false,
          })
        })
        await msg.channel.send(`${msg.guild.members.find(m => m.user.username.toLowerCase().includes(args[1])).user.username} muted ,-,`)
      } catch (e) {
        console.log(e.stack);
      }
    }
  }
});






  client.on('message',async message => {
  if(message.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`\`${message.guild.name}\``)
    .setThumbnail(message.guild.iconURL)
    .addField('• iD:', `- ${message.guild.id}`,true)
    .addField('• Owner:', `- ${message.guild.owner}`, true)
    .addField('• Channels:', `\`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}`, true)
    .addField('• Members:', `\`Count\` ${message.guild.memberCount} - \`Last\` ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m}`).splice(0, 1)}`, true)
    .addField('• AFK Channel:', `${message.guild.afkChannel || 'None'}`, true)
    .addField('• Other:', `\`Roles\` ${message.guild.roles.size} - \`Emojis\` ${message.guild.emojis.size} \`[\` ${message.guild.emojis.map(m => m).join(' **|** ')} \`]\``,true)
    .addField('• Region:', `${message.guild.region}`, true);

    message.channel.send(embed);
  }
});








  






client.on('message', message => {

              if(!message.channel.guild) return;

    var prefix = " -";

    if(message.content.startsWith('-bc')) {

    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);


    let request = `Requested By ${message.author.username}`;

    if (!args) return message.reply('**اكتب شي لي ارسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {

    msg.react('✅')

    .then(() => msg.react('❌'))

    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

    reaction1.on("collect", r => {

    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));

    message.guild.members.forEach(m => {

    var bc = new

       Discord.RichEmbed()

       .setColor('RANDOM')

         .setTitle('لي دخول السيرفر اضغط هنا')
       
       .setURL('حط رابط سيرفرك')

       .addField('Server', message.guild.name)

       .addField('Sender', message.author.username)

       .addField('Message', args)

    m.send({ embed: bc })

    msg.delete();

    })

    })

    reaction2.on("collect", r => {

    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

    msg.delete();

    })

    })

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

