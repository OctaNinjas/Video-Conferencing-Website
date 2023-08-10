const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

async function startLocalVideo() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = stream;
    } catch (error) {
        console.error('Error accessing camera or microphone:', error);
    }
}

function receiveMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}

sendButton.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim() !== '') {
        receiveMessage('You: ' + message);
        chatInput.value = '';
    }
});

startLocalVideo();
