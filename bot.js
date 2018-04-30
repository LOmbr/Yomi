const Discord = require("discord.js");
const client = new Discord.Client();

const prefixe = '!y'

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('Yomi bot');	
});

client.on('message', msg => {
	
	if(msg.content.startsWith(prefixe)) {
		msg.channel.send('Yomi bot on Dev');
	}
});

client.login(process.env.TOKEN);

