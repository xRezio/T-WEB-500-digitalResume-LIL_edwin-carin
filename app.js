
    // const texteDynamique = document.getElementById('texte-dynamique');
    // const texteAInserer = "Bienvenue sur mon CV en ligne.";

    // // Fonction pour ajouter le texte progressivement
    // function afficherTexteProgressivement(texte, vitesse) {
    //     let index = 0;
    //     const interval = setInterval(() => {
    //         texteDynamique.textContent += texte[index];
    //         index++;
    //         if (index === texte.length) {
    //             clearInterval(interval); // Arrêter l'effet de frappe une fois terminé
    //         }
    //     }, vitesse);
    // }

    // // Démarrer l'effet de frappe
    // afficherTexteProgressivement(texteAInserer, 100); // 100 millisecondes de délai entre chaque caractère

    const profileBox = document.getElementById('profileBox');
    let isZoomed = false;

    profileBox.addEventListener('click', () => {
        if (!isZoomed) {
            profileBox.classList.add('zoomed');
            isZoomed = true;
            document.body.classList.add('blur');
        } else {
            profileBox.classList.remove('zoomed');
            isZoomed = false;
            document.body.classList.remove('blur');
        }
    });