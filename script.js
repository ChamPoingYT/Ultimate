// Pseudo chiffré à déchiffrer
const pseudoChiffres = {
    'je5a': 'a', 'je3q': 'b', 'zm9a': 'c', 'zl6q': 'd', 'ct9o': 'e',
    'gz2a': 'f', 'dh4g': 'g', 'rt5a': 'h', 'zj5s': 'i', 'zk7a': 'j',
    'gj2g': 'k', 'hb4j': 'l', 'am4s': 'm', 'jt9g': 'n', 'gq1n': 'o',
    'nt7g': 'p', 'js4f': 'q', 'kg3j': 'r', 'dh7h': 's', 'gp1a': 't',
    'ne3q': 'u', 'pt8h': 'v', 'ht3w': 'w', 'ke5z': 'x', 'ge1h': 'y', 'ee2a': 'z'
};

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        const messageList = document.getElementById('messageList');
        const messageElement = document.createElement('div');
        messageElement.textContent = `Me: ${message}`;
        messageList.appendChild(messageElement);

        // Clear input after sending message
        messageInput.value = '';
    }
}

function searchFriend() {
    const friendUsernameInput = document.getElementById('friendUsername').value.trim().toLowerCase();
    const decodedUsername = decodeUsername(friendUsernameInput);

    if (decodedUsername) {
        const searchResult = document.getElementById('searchResult');
        searchResult.textContent = `Nom d'utilisateur déchiffré : ${decodedUsername}`;
    } else {
        const searchResult = document.getElementById('searchResult');
        searchResult.textContent = 'Nom d'utilisateur non trouvé ou invalide.';
    }

    return false; // Empêche l'envoi du formulaire
}

function decodeUsername(chiffre) {
    // Convertit le pseudo chiffré en pseudo normal à l'aide de la table de correspondance
    return chiffre.split('-').map(part => pseudoChiffres[part]).join('');
}

function createAccount() {
    const usernameInput = document.getElementById('signupUsername').value.trim();
    const passwordInput = document.getElementById('signupPassword').value.trim();
    const emailInput = document.getElementById('signupEmail').value.trim();

    // Vous pouvez ajouter ici la validation des données du formulaire

    // Exemple simplifié de gestion de compte (stockage en local storage pour démonstration)
    const newUser = {
        username: usernameInput,
        password: passwordInput,
        email: emailInput
    };

    // Simulation de stockage des informations de l'utilisateur (à remplacer par un backend réel)
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    const signupMessage = document.getElementById('signupMessage');
    signupMessage.textContent = 'Compte créé avec succès!';

    return false; // Empêche l'envoi du formulaire
}

