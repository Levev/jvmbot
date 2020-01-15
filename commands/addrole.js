const { devOnly } = require('../util');
exports.run = (client, message, args) => {
    if (message.member.roles.has(client.config.fejlesztoID)) {

        const sar = require('../assets/sar.json');
        const fs = require('fs');

        if (args.length === 0) {
            message.channel.send('❌ **| Nem adtál meg rankot!**');
        }
 else {
            const roleName = args[0].toLowerCase();
            const role = message.guild.roles.find(r => r.name.toLowerCase() === roleName);
            if (!role) {
                message.channel.send('❌ **| Nem létezik ilyen rank!**');
            }
 else {
                if (!sar[role.id]) {
                    sar[role.id] = {
                        enabled: true
                    };
                }
                if (sar[role.id].enabled === false) {
                    sar[role.id].enabled = true;
                }
                fs.writeFileSync('./assets/sar.json', JSON.stringify(sar, null, 2));
                message.channel.send(`✅ **| Rank \`${role.name}\` hozzáadva a listához!**`);
            }
        }
    }
 else {
        devOnly(message.channel);
    }
};

exports.info = {

    syntax: '<role>',
    description: 'Ezzel a paranccsal role-okat lehet hozzáadni a kérhető role-ok listájához.',
    adminOnly: true,

};
