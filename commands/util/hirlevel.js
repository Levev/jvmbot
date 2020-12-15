exports.run = (client, message) => {
    const member = message.guild.members.cache.get(message.author.id);
    if(member._roles.includes(client.config.roles.hirlevel) === false) {
        member.roles.add(client.config.roles.hirlevel)
        .then(() => message.channel.send('>>> ✅ **Feliratkoztál** a szerver hírlevelére! 📨'));
    }
    else {
        member.roles.remove(client.config.roles.hirlevel)
        .then(() => message.channel.send('>>> ✅ **Leiratkoztál** a szerver hírleveléről! 📨'));
    }
};

exports.info = {

    name: 'hirlevel',
    category: 'egyéb',
    syntax: '',
    description: 'Fel/le tudsz iratkozni a szerver hírlevélre/ről ezzel a paranccsal.',
    requiredPerm: null,
    aliases: ['hir', 'hirl', 'level']

};
