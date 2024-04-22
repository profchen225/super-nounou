
const profilesData = [
    { firstName: "Laure", lastName: "BOULLEAU", age: 10, photo: "image/LAURE.jpg" },
    { firstName: "Tao", lastName: "SIUUU", age: 3, photo: "image/SIUUU.jpg" },
    { firstName: "Yamal", lastName: "MBAPPE", age: 1, photo: "image/MBAPPE.jpg" },
    { firstName: "Aziz", lastName: "BELELOU", age: 5, photo: "image/BELELOU.jpg" }
  ];
  
  function displayProfiles() {
    const profilesContainer = document.getElementById("profilesContainer");
  
    profilesData.forEach(profile => {
      const profileDiv = document.createElement("div");
      profileDiv.classList.add("profile");
  
      const img = document.createElement("img");
      img.src = profile.photo;
      img.alt = `${profile.firstName} ${profile.lastName}`;
  
      const name = document.createElement("h2");
      name.textContent = `${profile.firstName} ${profile.lastName}`;
  
      const age = document.createElement("p");
      age.textContent = `Age: ${profile.age}`;
  
      const applyBtn = document.createElement("button");
      applyBtn.classList.add("apply-btn");
      applyBtn.textContent = "Postuler";
      applyBtn.addEventListener("click", () => showOverlay());
  
      profileDiv.appendChild(img);
      profileDiv.appendChild(name);
      profileDiv.appendChild(age);
      profileDiv.appendChild(applyBtn);
  
      profilesContainer.appendChild(profileDiv);
    });
  }
  
  function showOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
  }
  
  function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
  
  window.onload = displayProfiles;
   