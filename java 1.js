document.addEventListener("DOMContentLoaded", function() {

    const parentsBtn = document.getElementById("parents-btn");
    const nounousBtn = document.getElementById("nounous-btn");

    
    parentsBtn.addEventListener("click", function() {
        window.location.href = "parentins.html";
    });

    nounousBtn.addEventListener("click", function() {
        window.location.href = "nounouins.html";
    });
});
