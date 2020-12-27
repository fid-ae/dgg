const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '!wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**خۆت لە ڤۆیس نیت بیمە کوێ من**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`تۆش ئەوە لێنکە دانێ ئەگەرنا رەشی دەکەینەوە https://discord.gg/cx5pVjMpzP`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("791415959029678142").send(
`> sent By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`رێکلامەکە بۆمن بنێرە `,"http://twitch.tv/PAYWANDcamper") 
});




client.login("NzkyNzkyODI2NzUyMjcwMzY1.X-i32w.8YT3lWUEdsCoZbup7ue_bfLPN84");//تۆکین لێرە دانێ
