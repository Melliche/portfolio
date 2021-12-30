let timeout;
let point = 1;
let randomchoose = 5;
let randomverif = 5;
let randomcolor = 5;
let colorblue;
let victory = 1;

setInterval(function pointview(){
    document.getElementById("point").innerHTML = "Vous avez " + point + " points !";

}, 50)

function cancelledtest(id){
    console.log(colorblue)
    if (document.getElementById(id).style.backgroundColor === "blue"){
        point++;
        clearTimeout (timeout);
        test(true);  
    }
}

function stop(){
    point = 1;
    document.getElementById(randomchoose).style.backgroundColor = "white";
    clearTimeout (timeout);
}

function test(negative = null) {
    timeout = setTimeout("test()", 2000);
        if (negative === null){
            point--;
        }
        document.getElementById(randomcolor).style.backgroundColor = "white";
        if (victory < 2) {   
            color();
        } else {
            clearTimeout(timeout);
        }
}

function color() {
    document.getElementById(random()).style.backgroundColor = "blue";
    colorblue = document.getElementById(randomchoose).style.backgroundColor === "blue";
}

function random() {
    while (randomchoose === randomverif){
        randomchoose = Math.floor(Math.random() * 9); 
    }
    randomcolor = randomchoose;
    console.log(randomcolor);
    randomverif = randomchoose;
    return randomchoose;
    
}
