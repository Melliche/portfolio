let choix5 = [];
let reponse5 = [];
let id;
let i = 1;
let numerordm = 0;
let verifnumerordm = 0;
let pourcentage;


// génère le montant de la cagnotte et l'affiche

let cagnotte = Math.floor(Math.random() * (1000000 - 1000) + 1000)
document.getElementById("cagnotteh1").innerHTML = "La cagnotte est de " + cagnotte + " €";


function startgrid(start) {
    start.style.display = "none";
    createGrille();
}

function createGrille() {
    time = setTimeout("createGrille()", 40);
    numero = document.createElement("div");
    numero.className = "bouton";
    numero.innerHTML = i;
    numero.setAttribute("id", i);
    document.getElementById("grille").appendChild(numero);
    if (i % 7 == 0) {
        br = document.createElement("br");
        document.getElementById("grille").appendChild(br);
    }
    i++;
    if (i > 49) {
        clearTimeout(time);
    }

    numero.onclick = function () {
        if (choix5.length <= 4) {
            id = this.id;
            console.log(id);
            document.getElementById(id).style.visibility = "hidden";
            numerochoix = document.createElement("div");
            numerochoix.className = "bouton";
            numerochoix.innerHTML = id;
            numerochoix.setAttribute("id", id)
            document.getElementById("grillechoix").appendChild(numerochoix);
            choix5.push(id);
            console.log(choix5.length)
            if (choix5.length === 5) {
                for (let index = 0; index < choix5.length; index++) {

                    while (verifnumerordm === numerordm) {
                        verifnumerordm = Math.floor(Math.random() * 8) + 1
                    }
                    console.log("ok")
                    numerordm = verifnumerordm;
                    reponse5.push(numerordm);
                    document.getElementById("grillereponse").style.visibility = "visible";
                    numeroreponse = document.createElement("div");
                    numeroreponse.className = "bouton";
                    numeroreponse.innerHTML = numerordm;
                    numeroreponse.setAttribute("id", numerordm)
                    document.getElementById("grillereponse").appendChild(numeroreponse);
                    if (reponse5[0] == choix5[0]) {
                        pourcentage = pourcentage + 0.1;
                    }
                    if (reponse5[1] == choix5[1]) {
                        pourcentage = pourcentage + 0.1;
                    }
                    if (reponse5[2] == choix5[2]) {
                        pourcentage = pourcentage + 0.1;
                    }
                    if (reponse5[3] == choix5[3]) {
                        pourcentage = pourcentage + 0.1;
                    }
                    if (reponse5[4] == choix5[4]) {
                        pourcentage = pourcentage + 0.1;
                    }
                    document.getElementById("pactol").innerHTML = "Vous avez gagné " + cagnotte * pourcentage;
                    console.log(reponse5);

                }
            }
        }
    }



}

