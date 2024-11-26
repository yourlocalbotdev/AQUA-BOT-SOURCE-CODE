const{ token } = require('./config.json');
const { Client, Events, GatewayIntentBits } = require ('discord.js');

const client = new Client ({intents: GatewayIntentBits.Guilds});

client.once(Events.ClientReady, c => {
    console.log('Logged in as ${c.user.tag}');

    const ping = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')
const hello = new SlashCommandBuilder()
     .setName('hello')
     .setDescription('Says Hello to soemone')

    client.application.commands.create(ping, "")
    client.application.commands.create(hello, "")
});

client.on(Events.InteractionCreate, interaction => {
    if(!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'ping' ){
        interaction.reply("Pong!");
    }
    if (interaction.commandName === 'hello'){
        interaction.reply('Hello ${interaction.user.username}!');
    }
})
client.login(token);
