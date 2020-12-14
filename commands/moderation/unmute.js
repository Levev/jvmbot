const { log } = require('../../moderationHandler');
const { cmdUsage, findMember } = require('../../util');
exports.run = (client, message, args) => {

    if(!args.length) return cmdUsage(this, message);

    const punished = findMember(args[0], message);
    if(!punished) return message.channel.send('❌ **| Nincs ilyen tag!**');

    let reason;
    args.shift();
    if(args.length) reason = args.join(' ');

    punished.roles.remove(client.config.muteRole, reason);

    log('Unmute', message.author, punished, reason);

    message.channel.send(`✅ **| ${punished.user.tag} unmuteolva lett`);

};

exports.info = {

    name: 'mute',
    category: 'moderáció',
    syntax: '<tag> <idő> <ok>',
    description: 'Ezzel a paranccsal muteolni lehet tagokat.',
    requiredPerm: 'moderator',

};