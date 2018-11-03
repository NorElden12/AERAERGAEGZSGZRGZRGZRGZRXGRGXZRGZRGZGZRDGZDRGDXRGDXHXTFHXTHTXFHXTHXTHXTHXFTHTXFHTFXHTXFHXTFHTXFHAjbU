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






















 client.login(process.env.BOT_TOKEN);

