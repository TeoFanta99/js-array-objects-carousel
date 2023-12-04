/*
Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider. FATTO

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. FATTO

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra. FATTO
*/

// SELEZIONE degli elementi nel DOM
const btnUp = document.querySelector(".fa-chevron-up");
const btnDown = document.querySelector(".fa-chevron-down");
const immagineCarosello = document.getElementById("immagine");
const titoloCarosello = document.getElementById("titolo");
const testoCarosello = document.getElementById("testo");


// ARRAY di oggetti 
const images = [ 
    
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },  
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.' 
    }, 
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos." 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city' 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.' 
    }, 
    
];

// DICHIARO l'indice dell'immagine attualmente visualizzata
let currentIndex = 0;


// FUNZIONE che imposta l'indice corrente
function selezionaOggetto(i) {
    currentIndex = i;

    if (i >= 0 && i < images.length) {

        // ci restituisce l'oggetto che desideriamo
        currentImage = images[i];

        // ci restituisce il valore dell'oggetto che vogliamo
        immagineCarosello.src = currentImage.image;
        titoloCarosello.innerHTML = currentImage.title;
        testoCarosello.innerHTML = currentImage.text;
    }
};


// IMPOSTO la prima immagine dell'array
selezionaOggetto(0);


// FUNZIONE next click
function next() {
    currentIndex = (currentIndex + 1) % images.length;
    selezionaOggetto(currentIndex);
}
btnDown.addEventListener("click", next);


// FUNZIONE prev click
function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    selezionaOggetto(currentIndex);
}
btnUp.addEventListener("click", prev);


