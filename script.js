// script.js

// Simulation de l'avatar par défaut
const defaultAvatarUrl = 'default-avatar.jpg';

// Changement d'avatar
const changeAvatarButton = document.getElementById('changeAvatarButton');
changeAvatarButton.addEventListener('click', function() {
    alert('Fonctionnalité de changement d\'avatar à implémenter');
});

// Déconnexion
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        alert('Vous êtes déconnecté');
        window.location.href = 'logout.html'; // Redirection vers la page de déconnexion
    }
});

// Création de forum
const createForumButton = document.getElementById('createForumButton');
createForumButton.addEventListener('click', function() {
    alert('Fonctionnalité de création de forum à implémenter');
});

// Création de salon
const createChannelButton = document.getElementById('createChannelButton');
createChannelButton.addEventListener('click', function() {
    alert('Fonctionnalité de création de salon à implémenter');
});

// Affichage du profil au survol de l'avatar
const avatarImages = document.querySelectorAll('.avatar-small');
const profilePreview = document.getElementById('profilePreview');

avatarImages.forEach(avatar => {
    avatar.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        const username = 'Username'; // Exemple de récupération du nom d'utilisateur
        const bio = 'Bio de l\'utilisateur'; // Exemple de récupération de la bio
        const role = 'Role de l\'utilisateur'; // Exemple de récupération du rôle
        profilePreview.style.display = 'block';
        profilePreview.innerHTML = `
            <div class="profile-info">
                <img src="${avatar.src}" alt="Avatar" class="avatar-small">
                <div class="profile-details">
                    <span class="profile-username">${username}</span><br>
                    <span class="profile-bio">${bio}</span><br>
                    <span class="profile-role">${role}</span>
                </div>
            </div>
        `;
    });
});

// Masquage du profil au clic à l'extérieur
document.addEventListener('click', function(event) {
    if (!event.target.closest('.avatar-small')) {
        profilePreview.style.display = 'none';
    }
});

// Fonction de recherche de forum
function searchForum() {
    event.preventDefault();
    const forumSearchInput = document.getElementById('forumSearchInput').value;
    if (forumSearchInput.trim() !== '') {
        alert(`Recherche de forum : ${forumSearchInput}`);
        // Implémenter la logique de recherche de forum ici
    } else {
        alert('Veuillez entrer un terme de recherche');
    }
}

