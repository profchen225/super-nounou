document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inscription-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("password-confirm").value;
        const rememberPassword = document.getElementById("remember-password").checked;

       
        if (password !== passwordConfirm) {
            alert("Les mots de passe ne correspondent pas.");
            return; 
        }
        alert(`Inscription réussie :
Nom : ${nom}
Prénom : ${prenom}
Mot de passe : ${password}
Se souvenir du mot de passe : ${rememberPassword ? "Oui" : "Non"}`);
    });
});
