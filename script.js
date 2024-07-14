// script.js

// Simulation de l'avatar par défaut
const defaultAvatarUrl = 'default-avatar.jpg';

// Changement d'avatar
const changeAvatarButton = document.getElementById('changeAvatarButton');
changeAvatarButton.addEventListener('click', function() {
    // Placeholder pour le changement d'avatar (exemple)
    alert('Fonctionnalité de changement d\'avatar à implémenter');
});

// Déconnexion
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function() {
    // Placeholder pour la déconnexion (exemple)
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        // Logique de déconnexion
        alert('Vous êtes déconnecté');
        window.location.href = 'logout.html'; // Redirection vers la page de déconnexion
    }
});

// Création de forum
const createForumButton = document.getElementById('createForumButton');
createForumButton.addEventListener('click', function() {
    // Placeholder pour la création de forum (exemple)
    alert('Fonctionnalité de création de forum à implémenter');
});

// Création de salon
const createChannelButton = document.getElementById('createChannelButton');
createChannelButton.addEventListener('click', function() {
    // Placeholder pour la création de salon (exemple)
    alert('Fonctionnalité de création de salon à implémenter');
});

// Fonction de recherche de forum (exemple de fonctionnalité)
function searchForum() {
    event.preventDefault(); // Empêche le rechargement de la page par défaut
    const forumSearchInput = document.getElementById('forumSearchInput').value;
    // Placeholder pour la recherche de forum (exemple)
    if (forumSearchInput.trim() !== '') {
        alert(`Recherche de forum : ${forumSearchInput}`);
        // Ici, vous pouvez implémenter la logique pour rechercher des forums
        // Par exemple, mettre à jour la liste des forums trouvés dans l'interface
    } else {
        alert('Veuillez entrer un terme de recherche');
    }
}

