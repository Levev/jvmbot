const {getEmoji, getMention} = require("../util");
const config = require("../config");
exports.run = (client, message, args) => {
    message.delete();
    let member = message.guild.members.get(message.author.id)
    if (member.roles.has(client.config.tagID) !== true) {
        member.removeRole(client.config.ideiglenestagID).then(() =>
            member.addRole(client.config.tagID));
        message.author.send(`**Gratulálok, <@${message.author.id}>!** 
        Mostmár láthatod a többi csatornát a szerveren és megkaptad a **Tag** rangot!🙂\n
        **Olvasd el a *${getMention(config.szabalyokID)}* csatornát is!**\n\n
        Jelenleg ${message.guild.members.size} tag van a szerveren!\n\n
        ${getEmoji(client, "vidman_logo")} __${message.guild.name}__`)
    }
};

exports.info = {

    syntax: '',
    description: 'Ellenőrző parancs a belépéskor.'

};
