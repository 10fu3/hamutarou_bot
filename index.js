const { Client, GatewayIntentBits, Partials } = require("discord.js")

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
