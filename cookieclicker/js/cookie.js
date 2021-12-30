let nb_cookies = 0;
let price_upgrade = 8;
let cookies_upgrade = 0;
let cookies_upgrade_verif = 1;
let totalcookies = 
// let isactiv = new Boolean(false);




setInterval(function cookiesupgrades(){
    document.getElementById("directcookies").innerHTML = "Vous avez " + nb_cookies.toFixed(0) + " cookies";
    document.getElementById("prixup").innerHTML = "Le coût de l'amélioration est de " + price_upgrade.toFixed(0) + " cookies.";
    document.getElementById("cookiesup").innerHTML = "Vous générez chaque secondes " + cookies_upgrade.toFixed(1) + " cookies.";
}, 20) 

function uppingcookies(){
    nb_cookies++;
    console.log(nb_cookies + " cookies")
}



function automatic(){
    if (nb_cookies >= price_upgrade){
    nb_cookies = nb_cookies - price_upgrade;
    price_upgrade = price_upgrade * 1.1;
    if (cookies_upgrade > 0.1){
    cookies_upgrade = cookies_upgrade * 1.1;
    }else{
        cookies_upgrade = 1;
    }}
}

setInterval(function upgradecookies(){
    nb_cookies = nb_cookies + cookies_upgrade;
    console.log(nb_cookies)

}, 1000)






