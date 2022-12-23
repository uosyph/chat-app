document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#submit_invite').addEventListener('click', invite);
});

function invite() {
    if (document.querySelector('#recipient').value == '' || document.querySelector('#channels').value == 'default') {
        alert("You must enter both fields.", 'failed');
        return null;
    }

    channels = document.querySelector('#channels');

    fetch('/api/send_invite', {
        method: 'POST',
        body: JSON.stringify({
            channel: document.querySelector('#channels').value,
            recipient: document.querySelector('#recipient').value
        })
    })
        .then((response) => response.status)
        .then(status => {
            console.log(status);
            if (status == 404) {
                alert("This user does not exist.", 'failed');
            }
            else if (status == 200) {
                alert("Invite sent successfully.", "success");
            }
            else {
                alert("You have already invited this user to this channel.", 'failed');
            }
        });
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
    }, 4000);
}