exports.run = (client, message, args) => {
    message.delete();
    message.guild.members.get(message.author.id).removeRole(config.ytID);
    message.author.send(`✔️ **LEiratkoztál** a szerver YouTube hírleveléről! <:youtube_logo:584701064637448202>\n\n<:vidman_logo:584352979818250257> __${message.guild.name}__`)
};

exports.info = {

    syntax: '',
    description: 'LEiratkozás a szerver YouTube hírleveléről'

};
