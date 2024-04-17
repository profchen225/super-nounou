document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const rememberCheckbox = document.getElementById("remember");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nom = form.nom.value;
        const prenom = form.prenom.value;
        const email = form.email.value;
        const telephone = form.telephone.value;
        const password = form.password.value;
        const rememberPassword = rememberCheckbox.checked;

        console.log("Nom :", nom);
        console.log("Prénom :", prenom);
        console.log("Email :", email);
        console.log("Numéro de téléphone :", telephone);
        console.log("Mot de passe :", password);
        console.log("Se souvenir du mot de passe :", rememberPassword);

        // Vous pouvez ajouter ici le code pour envoyer les données à votre serveur ou faire d'autres traitements
    });
});
