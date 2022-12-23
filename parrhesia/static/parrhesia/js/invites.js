document.addEventListener('DOMContentLoaded', () => {
    load_invites();
});

function load_invites() {
    fetch('/api/invites')
        .then((response) => response.json())
        .then((invites) => {
            console.log(invites);
            for (let i = 0; i < invites.length; i++) {
                id = Number(invites[i].id);
                const invite_div = document.createElement('div');
                invite_div.id = id;
                invite_div.className = 'center';
                fetch('/api/user/' + invites[i].sender_id)
                    .then(response => response.json())
                    .then(user => {
                        invite_div.innerHTML =
                            `<hr>
                <h4 class='nobreak channelnameinv'>${invites[i].channel_name}</h4>
                <br style="margin-bottom: 5px;">
                <p class='graytext'>Sent by: <b>${user}</b></p>
                <button style="margin-right: 10px;" class="right btn inv-btn" onclick='accept_invite(${id},${invites[i].channel_id})' id="accept${id}">Accept</button>
                <button class="right btn inv-btn-red" onclick='decline_invite(${id})' id="decline${id}">Decline</button>
                <br style="margin-bottom: 16px;">`;
                        document.querySelector('#invites').append(invite_div);
                        console.log('invite');
                    });
            }
        });
}

function accept_invite(id, channel_id) {
    fetch('/api/accept_invite', {
        method: 'POST',
        body: JSON.stringify({
            invite_id: id
        })
    }).then(() => location.replace('/channel/' + channel_id));
}

function decline_invite(id) {
    fetch('/api/decline_invite', {
        method: 'POST',
        body: JSON.stringify({
            invite_id: id
        })
    });
    var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
}