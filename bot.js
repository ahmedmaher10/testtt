const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "هني البرفكس"
///!                  Mal,SizGooo ツ


//bc

client.on("message", message => {
    if (message.content.startsWith(prefix + "obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online
///!                  Mal,SizGooo ツ


  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });


///!                  Mal,SizGooo ツ



client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith(prefix + "avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });


///!                  Mal,SizGooo ツ
  
  client.on('message', msg => {
    if(msg.content === prefix + 'help'))
    msg.reply('Check Your DM :white_check_mark:')
  });
  
  
  
  
  ///!                  Mal,SizGooo ツ
  
  
  
  
  
  client.on("message", message => {
    if (message.content === prefix + "help")){
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       ${prefix}obc | لأرسال برود كاست للكل

       ${prefix}bc  |  لأرسال برود كاست للأونلاين

       ${prefix}inv | لدعوة البوت الي سيرفرك

   message.author.sendEmbed(embed)
   
   }
   });


   client.on("message", message => {
    if (message.content === prefix +  "inv")) {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .addField('Broadcast', `https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
     message.author.send({embed});
   
    }
   });


///!                  Mal,SizGooo ツ


   client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Broadcast Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[${prefix}]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                    })
}
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("${prefix}help | ${prefix}inv",{type: 'WATCHING'});
  
  });

client.login(process.env.TOKEN);
