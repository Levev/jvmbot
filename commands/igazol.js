const { getEmoji, getMention } = require('../util');
const config = require('../config');
exports.run = (client, message) => {
    const member = message.guild.members.get(message.author.id);
    if (member.roles.has(client.config.tagID) !== true) {
        member.addRole(client.config.tagID).then(() => {
            message.author.send(`**Gratulálok, <@${message.author.id}>!**\nMostmár láthatod a többi csatornát a szerveren és megkaptad a **Tag** rangot!\n**Olvasd el a ${getMention(config.szabalyokID)} csatornát is!**\n\nJelenleg ${message.guild.members.size} tag van a szerveren!\n\n${getEmoji(client, 'vidmanLogo')} __${message.guild.name}__`);
        });
    }
    message.delete();
};

exports.info = {

    syntax: '',
    description: 'Ellenőrző parancs a belépéskor.'

};
