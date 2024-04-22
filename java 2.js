

document.addEventListener("DOMContentLoaded", function() {
    const profilesData = [
        { nom: "SANOGO", prenom: "Miriam", nationalite: "Ivoirienne", competence: "Pianiste", experience: "5 ans", photo: "image/AHOU.jpg", emploiDuTemps: ["Lundi: 9h00 - 17h00", "Mercredi: 9h00 - 13h00", "Vendredi: 14h00 - 18h00"], prix: "5000 FCFA/h" },
        { nom: "JAMBE", prenom: "Christelle", nationalite: "Française", competence: "Polyglotte", experience: "10 ans", photo: "image/JAMBE.jpg", emploiDuTemps: ["Mardi: 10h00 - 15h00", "Jeudi: 13h00 - 18h00"], prix: "9000 FCFA/h" },
        { nom: "WILLIAMS", prenom: "Jane", nationalite: "Américaine", competence: "Danseuse", experience: "1 an", photo: "image/WILLIAMS.jpg", emploiDuTemps: ["Lundi: 13h00 - 17h00", "Mardi: 15h00 - 18h00", "Jeudi: 11h00 - 14h00"], prix: "2900 FCFA/h" },
        { nom: "SANTOS", prenom: "Daniela", nationalite: "Brésilienne", competence: "Excellente Dessinatrice", experience: "7 ans", photo: "image/SANTOS.jpg", emploiDuTemps: ["Mercredi: 10h00 - 13h00", "Vendredi: 10h00 - 15h00"], prix: "6400 FCFA/h" },
        { nom: "UZAMAKI", prenom: "Sakura", nationalite: "Japonaise", competence: "Cordon Bleu", experience: "2 ans", photo: "image/UZUMAKI.jpg", emploiDuTemps: ["Lundi: 10h00 - 14h00", "Mercredi: 14h00 - 18h00", "Vendredi: 9h00 - 12h00"], prix: "4000 FCFA/h" }
    ];

    const profilesContainer = document.getElementById("profiles");
    const modal = document.getElementById("profileModal");
    const closeButton = document.querySelector(".close");
    const reserveButton = document.getElementById("reserveButton");

    function renderProfiles() {
        profilesData.forEach(profile => {
            const profileDiv = document.createElement("div");
            profileDiv.classList.add("profile");
            profileDiv.innerHTML = `
                <img src="${profile.photo}" alt="${profile.nom}">
                <div class="profile-name">${profile.prenom} ${profile.nom}</div>
            `;
            profilesContainer.appendChild(profileDiv);

            profileDiv.addEventListener("click", function() {
                showProfileDetails(profile);
            });
        });
    }

    function showProfileDetails(profile) {
        const profileDetailsContainer = document.getElementById("profile-details");
        profileDetailsContainer.innerHTML = `
            <h2>${profile.prenom} ${profile.nom}</h2>
            <p><strong>Nationalité:</strong> ${profile.nationalite}</p>
            <p><strong>Compétence:</strong> ${profile.competence}</p>
            <p><strong>Expérience:</strong> ${profile.experience}</p>
            <p><strong>Prix:</strong> ${profile.prix}</p>
        `;
        
        const scheduleContainer = document.getElementById("schedule");
        scheduleContainer.innerHTML = "<h3>Emploi du Temps</h3>";
        profile.emploiDuTemps.forEach(slot => {
            const slotItem = document.createElement("p");
            slotItem.textContent = slot;
            scheduleContainer.appendChild(slotItem);
        });

        modal.style.display = "block";


        reserveButton.href = `reserve.html?nom=${profile.nom}&prenom=${profile.prenom}`;
    }

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    renderProfiles();
});
