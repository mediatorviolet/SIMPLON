var pseudo, round, compteurOrdi, compteurUser, shifumiOrdi, shifumi;

function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function getPseudo() {
    pseudo = prompt("Quel est ton nom ?")
    document.getElementById("pseudo").innerText = pseudo;
}
function getRound() {
    round = Number(prompt("Combien de manches veux-tu jouer ?")); 
}
compteurOrdi = 0;
compteurUser = 0;
shifumiOrdi = mathRandomInt(1,3);
if (shifumiOrdi == 1) {
    shifumiOrdi = 'Pierre'
} else if (shifumiOrdi == 2) {
    shifumiOrdi = 'Feuille'
} else {
    shifumiOrdi = 'Ciseaux'
}

function redLedUser() {
    document.getElementById("led1").style.backgroundColor = "red";
}
function greenLedUser() {
    document.getElementById("led1").style.backgroundColor = "green";
}
function getPierre () {
    p = document.getElementsByClassName("pierre");
    p.onclick = document.getElementById("userWindow").style.backgroundImage = "url(pierre.png)";
}