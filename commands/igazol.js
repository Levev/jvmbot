exports.run = (client, message, args) => {
    message.delete();
    message.guild.members.get(message.author.id).removeRole(config.ideiglenestagID);
    message.guild.members.get(message.author.id).addRole(config.tagID);
    message.author.send(`**Gratulálok, <@${message.author.id}>!** Mostmár láthatod a többi csatornát a szerveren és megkaptad a Tag rangot!🙂\n**Olvasd el a *<#584734791761526793>* csatornát is!**\n\nJelenleg ${message.guild.members.size} tag van a szerverben!\n\n<:vidman_logo:588027207772012544> __${message.guild.name}__`)
};

exports.info = {

    syntax: '',
    description: 'Ellenőrző parancs a belépéskor'

};
