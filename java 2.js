document.addEventListener("DOMContentLoaded", function() {
    const personnes = [
        { nom: "SANOGO", prenom: "Miriam", age: 35, nationalite: "Ivoirienne", experience: "5 ans", competence: "Excellente Dessinatrice", prix: "50 XOF", photo:"person.jpg" },
        { nom: "JAMBE", prenom: "Christelle", age: 40, nationalite: "Française", experience: "10 ans", competence: "Cordon bleu", prix: "90 XOF", photo: "person2.jpg" },
        { nom: "WILLIAMS", prenom: "Jane", age: 19, nationalite: "Américaine", experience: "1 ans", competence: "Polyglotte", prix: "29 XOF", photo: "person2.jpg" },
        { nom: "SANTOS", prenom: "Daniela", age: 26, nationalite: "Brésilienne", experience: "7 ans", competence: "Pianiste", prix: "64 XOF", photo: "person2.jpg" },
        { nom: "UZAMAKI", prenom: "Sakura", age: 23, nationalite: "Japonaise", experience: "2 ans", competence: "Danseuse ", prix: "40 XOF", photo: "person2.jpg" },
       
       
        // Ajoutez d'autres personnes ici
    ];

    const tableBody = document.querySelector("#personnes tbody");
    const modal = document.getElementById("details-modal");
    const closeBtn = document.querySelector(".close");

    // Créer les lignes de la table pour chaque personne
    personnes.forEach(personne => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${personne.nom}</td>
            <td>${personne.prenom}</td>
            <td>${personne.age}</td>
            <td>${personne.nationalite}</td>
            <td><button class="details-btn">Détails</button></td>
        `;
        tableBody.appendChild(tr);
    });

    // Gérer l'événement du bouton "Détails"
    tableBody.addEventListener("click", function(event) {
        if (event.target.classList.contains("details-btn")) {
            const tr = event.target.closest("tr");
            const index = Array.from(tr.parentNode.children).indexOf(tr);
            showModal(personnes[index]);
        }
    });

    closeBtn.addEventListener("click", function() {
        hideModal();
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });

    function showModal(personne) {
        modal.style.display = "block";
        document.getElementById("nom").textContent = personne.nom;
        document.getElementById("prenom").textContent = personne.prenom;
        document.getElementById("age").textContent = personne.age;
        document.getElementById("nationalite").textContent = personne.nationalite;
        document.getElementById("experience").textContent = personne.experience;
        document.getElementById("competence").textContent = personne.competence;
        document.getElementById("prix").textContent = personne.prix;
        document.getElementById("photo").innerHTML = `<img src="${personne.photo}" alt="Photo de ${personne.nom} ${personne.prenom}">`;
    }

    function hideModal() {
        modal.style.display = "none";
    }
});
