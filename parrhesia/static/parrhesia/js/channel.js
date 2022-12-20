const id = window.location.pathname.slice(9);
var loaded_messages = [];
document.addEventListener('DOMContentLoaded', function () {
    fetch(`/api/channel/${id}`)
        .then(response => response.json())
        .then((channel) => {
            document.querySelector('title').innerHTML = `${channel.name} - Parrhesia`;
            document.querySelector('nav').style.position = 'fixed';
            document.querySelector('nav').style.backgroundColor = '#202026';
            document.querySelector('nav').style.top = '0';
            document.querySelector('nav').style.width = '100%';
        });

    document.querySelector('#sendmessagetext').addEventListener('click', create_message);

    setInterval(load_messages, 1000);
});

function load_messages() {
    channel_id = id;
    fetch(`/api/messages/${channel_id}`)
        .then(response => response.json())
        .then((messages) => messages.sort(function (a, b) {
            return b.id - a.id;
        }))
        .then((messages) => {
            if (JSON.stringify(messages) == JSON.stringify(loaded_messages)) {
                return null;
            }
            else {
                document.querySelector('#messages').innerHTML = '';
                loaded_messages = messages;
            }

            for (let i = 0; i < messages.length; i++) {
                const messagediv = document.createElement('div');
                document.querySelector('#messages').append(messagediv);

                let gmtime = messages[i].time;
                let localtime = new Date(gmtime);

                dayjs.extend(window.dayjs_plugin_relativeTime);
                let day = dayjs(localtime).format();
                let time = dayjs(day).fromNow();

                fetch(`/api/user/${messages[i].user_id}`)
                    .then(response => response.json())
                    .then(username => {
                        messagediv.id = messages[i].id;
                        messagediv.innerHTML =
                            `<hr>
                <p class='ms-4'>${username} said:</p>
                <h4 class='ms-3'>${messages[i].text}</h4>
                <small>${time}</small>
                <hr>`;
                    });
            }
        });
    return null;
}

function create_message() {
    channel_id = id;
    text = document.querySelector('#messagetext').value;
    fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({
            channel: channel_id,
            text: text
        })
    }).then(() => {
        document.querySelector('#messagetext').value = '';
        var elem = document.getElementById('messages');
        window.scrollTo(0, document.body.scrollHeight);
    });
}