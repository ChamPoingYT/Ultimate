// Simulated user authentication (hardcoded for demonstration)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];
let currentUser = null;

function loginUser() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Check if username and password match hardcoded users
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        currentUser = user;
        // Redirect to main page after successful login (for demonstration, just change location)
        window.location.href = 'index.html';
        return false; // Prevent form submission
    } else {
        const loginError = document.getElementById('loginError');
        loginError.style.display = 'block';
        return false; // Prevent form submission
    }
}

function sendMessage() {
    if (!currentUser) {
        alert('Please login to send messages.');
        return;
    }

    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        const messageList = document.getElementById('messageList');
        const messageElement = document.createElement('div');
        messageElement.textContent = `${currentUser.username}: ${message}`;
        messageList.appendChild(messageElement);

        // Clear input after sending message
        messageInput.value = '';
    }
}
