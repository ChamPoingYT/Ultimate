document.addEventListener("DOMContentLoaded", function() {
    var loginFormContainer = document.getElementById("loginFormContainer");
    var signupFormContainer = document.getElementById("signupFormContainer");
    var loginLink = document.getElementById("loginLink");
    var signupLink = document.getElementById("signupLink");

    // Afficher le formulaire d'inscription et masquer celui de connexion
    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginFormContainer.style.display = "none";
        signupFormContainer.style.display = "block";
    });

    // Afficher le formulaire de connexion et masquer celui d'inscription
    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        signupFormContainer.style.display = "none";
        loginFormContainer.style.display = "block";
    });

    // Validation côté client pour le formulaire de connexion
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        if (!validateLoginForm()) {
            event.preventDefault();
        }
    });

    function validateLoginForm() {
        var username = document.getElementById("usernameLogin").value.trim();
        var password = document.getElementById("passwordLogin").value.trim();

        if (username === "") {
            alert("Veuillez saisir un nom d'utilisateur pour vous connecter.");
            return false;
        }

        if (password === "") {
            alert("Veuillez saisir un mot de passe pour vous connecter.");
            return false;
        }

        return true;
    }

    // Validation côté client pour le formulaire d'inscription
    var signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function(event) {
        if (!validateSignupForm()) {
            event.preventDefault();
        }
    });

    function validateSignupForm() {
        var username = document.getElementById("usernameSignup").value.trim();
        var password = document.getElementById("passwordSignup").value.trim();

        if (username === "") {
            alert("Veuillez saisir un nom d'utilisateur pour vous inscrire.");
            return false;
        }

        if (password === "") {
            alert("Veuillez saisir un mot de passe pour vous inscrire.");
            return false;
        }

        // Autres validations si nécessaires

        return true;
    }
});


