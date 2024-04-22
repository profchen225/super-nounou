document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("connexion-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("password-confirm").value;
        if (password !== passwordConfirm) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        if (nom && prenom && password) {
            window.location.href = "effectif.html"; 
        } 
        else {
            alert("Veuillez remplir tous les champs.");
        }
    });
});
