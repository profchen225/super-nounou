document.addEventListener("DOMContentLoaded", function() {
    const accepterCheckbox = document.getElementById("accepter");
    const continuerBtn = document.getElementById("continuer-btn");

    continuerBtn.disabled = true; 

    accepterCheckbox.addEventListener("change", function() {
        continuerBtn.disabled = !this.checked; 
    });

    continuerBtn.addEventListener("click", function() {
        window.location.href = "effectif 1.html";
    });
});
