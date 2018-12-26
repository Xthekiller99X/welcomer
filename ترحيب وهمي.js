const Discord = require('discord.js');
const client = new Discord.Client();
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("512388317925343242");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(` Welcome to !legends united :revolving_hearts: ${member}`), 4000)        
}
});
client.login(process.env.BOT_TOKEN);