console.log(`Online`);
const Discord = require('discord.js');
const client = new Discord.Client();
var ServerID = "505995244672909323"; 
var ChannelID = "506154950859030534";


    console.log(`Online`);
client.on('warn', console.warn);

client.on('error', console.error);


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer = setTimeout(timerFunc, 1);


client.on('warn', console.warn);

client.on('error', console.error);


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer = setTimeout(timerFunc, 1);

client.login("NTA2MTU0MjY3MjIxMTY0MDY0.DreAjg.133ANeeg8pvlMpoEDZPNVm73_K4");
