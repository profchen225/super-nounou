document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inscription-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

        
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("password-confirm").value;
        const rememberPassword = document.getElementById("remember-password").checked;

       
        if (password !== passwordConfirm) {
            alert("Les mots de passe ne correspondent pas.");
            return; // Arrêter l'exécution de la fonction si les mots de passe ne correspondent pas
        }

        // Afficher les valeurs soumises
        alert(`Inscription réussie :
Nom : ${nom}
Prénom : ${prenom}
Mot de passe : ${password}
Se souvenir du mot de passe : ${rememberPassword ? "Oui" : "Non"}`);
    });
});
