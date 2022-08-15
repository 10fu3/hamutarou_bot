const { Client, GatewayIntentBits, Partials } = require("discord.js")

const express = require('express');

const port=process.env.PORT || 8080;
const token = process.env.TOKEN

const client = new Client({
    'intents': [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    'partials': [Partials.Channel]
});

client.on('messageCreate', message => {
    if (message.content === 'ね！ハム太郎！') {
        message.reply('「そうなのだ！まったくもってその通りなのだ！」')
    }
});

client.login(token)

const app = express();

app.get('/', (req, res)=>{ res.send('ハム太郎BOT'); });
app.listen(port, ()=>{ console.log(`Express Server Listen START at port=${port}`); });


