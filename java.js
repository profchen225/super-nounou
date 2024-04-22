document.addEventListener('DOMContentLoaded', function() {
    const footerText = document.getElementById("footer-text");
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} SUPER NOUNOU. Tous droits réservés.`;
});
