kiwi.plugin('custom-avatars', function(kiwi, log) {
    kiwi.on('irc.userlist', function(event, network) {
        event.users.forEach(function(user) {
            var username = user.ident;
            var nick = user.nick;
            var account = user.account;

            kiwi.state.addUser(network.id, {nick: nick, avatar: {
                small: 'https://api.dicebear.com/6.x/fun-emoji/png?seed=' + nick,
            }});
        });
    });

    kiwi.on('irc.join', function(event, network) {
        var username = event.ident;
        var nick = event.nick;
        var account = event.account;

        kiwi.state.addUser(network.id, {nick: nick, avatar: {
            small: 'https://api.dicebear.com/6.x/fun-emoji/png?seed=' + nick,
        }});
    });
});
