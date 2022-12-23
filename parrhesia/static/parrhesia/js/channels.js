document.addEventListener('DOMContentLoaded', () => {
    loadchannels();
    document.querySelector('#addchannelbtn').addEventListener('click', () => {
        addnewchannel();
    });
});

function loadchannels() {
    clear_channels();
    fetch('/api/channels')
        .then(response => response.json())
        .then((result) => {
            for (let i = 0; i < result.length; i++) {
                const channeldiv = document.createElement('div');
                channeldiv.addEventListener('click', () => {
                    location.replace('/channel/' + result[i].id);
                });
                channeldiv.className = 'hovermouse';
                channeldiv.innerHTML = `<hr><h4 class='center'>${result[i].name}</h4>`;
                document.querySelector('#channels').append(channeldiv);
                console.log(result[i]);
            }
        });
}

function addnewchannel() {
    channelName = document.querySelector('#newchannelname').value;

    if (channelName.length == 0) {
        alert('Channel name is empty.', 'failed');
        return;
    }

    fetch('/api/createchannel', {
        method: 'POST',
        body: JSON.stringify({
            channel_name: channelName
        })
    })
        .then(() => loadchannels())
        .then(() => alert('Channel created successfully!', 'success'))
        .then(() => {
            document.querySelector('#newchannelname').value = '';
        });
}

function clear_channels() {
    document.querySelector('#channels').innerHTML = '';
}

function alert(message, alert_type) {
    const alert = document.getElementById('alerts');
    alert.classList = 'msg center';
    alert.innerText = message;

    if (alert_type === 'failed') {
        alert.style.color = '#a85758';
    }
    else {
        alert.style.color = 'rgba(255, 255, 255, 0.8)';
    }

    setTimeout(() => {
        alert.innerText = '';
    }, 2000);
}