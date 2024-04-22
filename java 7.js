

document.addEventListener("DOMContentLoaded", function() {
    let selectedDates = []; 

    flatpickr("#datePicker", {
        mode: "range", 
        enableTime: true, 
        dateFormat: "Y-m-d H:i", 
        minTime: "09:00", 
        maxTime: "18:00", 
        time_24hr: true, 
        minDate: "today", 
        disable: [
            function(date) {
               
                return (date.getDay() === 0);
            }
        ],
        locale: {
        
            firstDayOfWeek: 1, 
            weekdays: {
                shorthand: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                longhand: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            },
            months: {
                shorthand: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
                longhand: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            },
        },
        onChange: function(selectedDates, dateStr, instance) {
            
            selectedDates = selectedDates.map(date => date.toISOString()); 
        }
    });


document.getElementById("clearButton").addEventListener("click", function() {
    const datePicker = document.getElementById("datePicker")._flatpickr;
    datePicker.clear(); 
});

    document.getElementById("confirmButton").addEventListener("click", function() {
       
        if (selectedDates.length >= 2) {
           
            const uniqueDates = new Set(selectedDates);
            if (uniqueDates.size === selectedDates.length) {
                alert("Les dates sélectionnées sont différentes.");
            } else {
                alert("Les dates sélectionnées sont identiques.");
            }
        } else {
            alert("Votre choix a été enregistrer votre nounou sera informée.");
        }
    });
});

