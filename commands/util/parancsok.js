const { MessageEmbed } = require('discord.js');
exports.run = (client, message, args) => {
    const helpEmbed = new MessageEmbed()
        .setColor('0x56f442')
        .setTitle('🗒 **| Parancsok**');

    let dev = false;

    if(message.content.endsWith('--slave')) {
        args = [];
        dev = true;
    }

    if(!args.length) {
        const categories = {};
        helpEmbed.description = 'Ha több infót akarsz megtudni egy parancsról: `.parancsok <parancs>`\n';
        client.commands.forEach(command => {
            categories[command.info.category] = [];
        });
        client.commands.forEach(command => {
            categories[command.info.category].push(`\`${command.info.name}\``);
        });

        if(!message.member._roles.includes(client.config.roles.fejleszto) || !message.member._roles.includes(client.config.roles.moderator) || dev) {
            delete categories['admin'];
            delete categories['dev'];
        }

        Object.keys(categories).forEach(category => {
            helpEmbed.addField(`**${category.substring(0, 1).toUpperCase()}${category.slice(1)}**\n`, categories[category].join(', '));
        });

        return message.channel.send(helpEmbed);
    }
    try {
        const commandFile = client.commands.get(args[0].toLowerCase());
        let reqPerm;
        switch(commandFile.info.requiredPerm) {
            case 'developer':
                reqPerm = 'fejlesztő';
                break;

            case 'moderator':
                reqPerm = 'moderátor';
                break;

            case 'admin':
                reqPerm = 'adminisztrátor';
                break;
        }
        message.channel.send(new MessageEmbed()
            .setColor('#56f442')
            .setTitle(`\`${client.config.prefix}${args[0].toLowerCase()}\``)
            .setDescription(`${!commandFile.info.syntax ? '' : `**Értékek:** ${commandFile.info.syntax}\n`}${!commandFile.info.description ? '' : `**Információ:** ${commandFile.info.description}\n`}${!commandFile.info.aliases ? '' : `**Aliasok:** ${commandFile.info.aliases.map(c => '`' + c + '`').join(', ')}`}\n${!reqPerm ? '' : `__Ezt a parancsot csak ${reqPerm} rangúak tudják használni!__`}`)
        );
    }
    catch(err) {
        message.channel.send('> ❌ **| Ez a parancs nem létezik!**');
    }
};

exports.info = {

    name: 'parancsok',
    category: 'egyéb',
    syntax: '<parancs>',
    description: 'Visszaadja az összes parancsot.',
    requiredPerm: null,
    aliases: ['parancs', 'commands', 'com', 'comm', 'command', 'help']

};
