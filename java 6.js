document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inscription-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const dateNaissance = document.getElementById("date-naissance").value;
        const profession = document.getElementById("profession").value;
        const lieuHabitation = document.getElementById("lieu-habitation").value;
        const indicatif = document.getElementById("indicatif").value;
        const tel = document.getElementById("tel").value;
        const competence = document.getElementById("competence").value;
        const commentaire = document.getElementById("commentaire").value;
        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("password-confirm").value;
        const rememberMe = document.getElementById("remember-me").checked;

        if (password !== passwordConfirm) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        if (nom && prenom && dateNaissance && profession && lieuHabitation && tel && competence && commentaire && password) {
            window.location.href = "politique-1.html"; 
        } else {
            alert("Veuillez remplir tous les champs.");
        }

        alert(`Inscription réussie :
Nom : ${nom}
Prénom : ${prenom}
Date de Naissance : ${dateNaissance}
Profession : ${profession}
Lieu d'Habitation : ${lieuHabitation}
Numéro de Téléphone : ${indicatif} ${tel}
Compétence : ${competence}
Commentaire : ${commentaire}
Se souvenir de moi : ${rememberMe ? "Oui" : "Non"}`);
    });
});
