exports.run = (client, message, args) => {
    message.delete();
    let mem = message.guild.members.get(message.author.id);
    if(mem.roles.has(client.config.ytID) === false) {
        mem.addRole(client.config.ytID);
        message.author.send(`✔️ **Feliratkoztál** a szerver YouTube hírlevelére! 📨\n\n<:vidman_logo:588027207772012544> __${message.guild.name}__`);
    } else {
        mem.removeRole(client.config.ytID);
        message.author.send(`✔️ **Leiratkoztál** a szerver YouTube hírleveléről! 📨\n\n<:vidman_logo:588027207772012544> __${message.guild.name}__`);
    }
};

exports.info = {
    syntax: '',
    description: 'Fel/le tudsz iratkozni a YouTube hírlevélre/ről ezzel a paranccsal.'
};
