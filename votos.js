
function player1(){
    var player1 = "hidan";
    sessionStorage.setItem("name1",player1);
    if (sessionStorage.getItem(player1) !== null) {
        votos = parseInt(sessionStorage.getItem(player1)) + 1;
        sessionStorage.setItem(player1, votos);
    } else {
        sessionStorage.setItem(player1, 1);
        
    }
    
}


function player2(){
    var player2 = "jockster";
    sessionStorage.setItem("name2",player2);
    if (sessionStorage.getItem(player2) !== null) {
        votos = parseInt(sessionStorage.getItem(player2)) + 1;
        sessionStorage.setItem(player2, votos);
    } else {
        sessionStorage.setItem(player2, 1);
        
    }
    
}

function player3(){
    var player3 = "micao";
    sessionStorage.setItem("name3",player3);
    if (sessionStorage.getItem(player3) !== null) {
        votos = parseInt(sessionStorage.getItem(player3)) + 1;
        sessionStorage.setItem(player3, votos);
    } else {
        sessionStorage.setItem(player3, 1);
        
    }
    
}

function player4(){
    var player4 = "yampi";
    sessionStorage.setItem("name4",player4);
    if (sessionStorage.getItem(player4) !== null) {
        votos = parseInt(sessionStorage.getItem(player4)) + 1;
        sessionStorage.setItem(player4, votos);
    } else {
        sessionStorage.setItem(player4, 1);
        
    }
    
}

function player5(){
    var player5 = "yuki";
    sessionStorage.setItem("name5",player5);
    if (sessionStorage.getItem(player5) !== null) {
        votos = parseInt(sessionStorage.getItem(player5)) + 1;
        sessionStorage.setItem(player5, votos);
    } else {
        sessionStorage.setItem(player5, 1);
        
    }
    
}

//contador de votos
/*var hidan = document.getElementById("resultado").innerHTML =
    "Hidan"+" "+ sessionStorage.getItem("hidan")+"<br>"+
    "Jockster"+" "+sessionStorage.getItem("jockster")+"<br>"+
    "MicaO"+" "+sessionStorage.getItem("micao")+"<br>"+
    "Yampi"+" "+sessionStorage.getItem("yampi")+"<br>"+
    "Yuki"+" "+sessionStorage.getItem("yuki");*/

const prct =100;
var total =  
            parseInt(sessionStorage.getItem("hidan"))+
            parseInt(sessionStorage.getItem("jockster"))+
            parseInt(sessionStorage.getItem("micao"))+
            parseInt(sessionStorage.getItem("yampi"))+
            parseInt(sessionStorage.getItem("yuki"));    

var p1 = document.getElementById("p1").innerHTML = (sessionStorage.getItem("hidan")/prct)*total +" % ";
var p2 = document.getElementById("p2").innerHTML = (sessionStorage.getItem("jockster")/prct)*total +" % ";
var p3 = document.getElementById("p3").innerHTML = (sessionStorage.getItem("micao")/prct)*total +" % ";
var p4 = document.getElementById("p4").innerHTML = (sessionStorage.getItem("yampi")/prct)*total +" % ";
var p5 = document.getElementById("p5").innerHTML = (sessionStorage.getItem("yuki")/prct)*total +" % ";