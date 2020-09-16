var pseudo, compteurOrdi, compteurUser, shifumiOrdi, shifumi, count;

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
compteurOrdi = 0;
compteurUser = 0;

// Led functions
function redLedUser1() {
    document.getElementById("led1").style.backgroundColor = "red";
}
function redLedUser2() {
    document.getElementById("led2").style.backgroundColor = "red";
}
function redLedUser3() {
    document.getElementById("led3").style.backgroundColor = "red";
}

function greenLedUser1() {
    document.getElementById("led1").style.backgroundColor = "green";
}
function greenLedUser2() {
    document.getElementById("led2").style.backgroundColor = "green";
}
function greenLedUser3() {
    document.getElementById("led3").style.backgroundColor = "green";
}

function redLedIA1() {
    document.getElementById("ledIA1").style.backgroundColor = "red";
}
function redLedIA2() {
    document.getElementById("ledIA2").style.backgroundColor = "red";
}
function redLedIA3() {
    document.getElementById("ledIA3").style.backgroundColor = "red";
}

function greenLedIA1() {
    document.getElementById("ledIA1").style.backgroundColor = "green";
}
function greenLedIA2() {
    document.getElementById("ledIA2").style.backgroundColor = "green";
}
function greenLedIA3() {
    document.getElementById("ledIA3").style.backgroundColor = "green";
}

//border functions
function greenBorderUser() {
    document.getElementById("userWindow").style.border = "10px solid green"
}
function redBorderUser() {
    document.getElementById("userWindow").style.border = "10px solid red"
}
function greenBorderIA() {
    document.getElementById("iaWindow").style.border = "10px solid green"
}
function redBorderIA() {
    document.getElementById("iaWindow").style.border = "10px solid red"
}

function getPierre() {
    document.getElementById("pierre");
    onclick = document.getElementById("userWindow").style.backgroundImage = "url('pierre.png')";
    onclick = getIA();
    shifumi = 'pierre';
    comparaison();
}
function getFeuille() {
    document.getElementById("feuille");
    onclick = document.getElementById("userWindow").style.backgroundImage = "url('feuille.png')";
    onclick = getIA();
    shifumi = 'feuille';
    comparaison();
}
function getCiseaux() {
    document.getElementById("ciseaux");
    onclick = document.getElementById("userWindow").style.backgroundImage = "url('ciseaux.png')";
    onclick = getIA();
    shifumi = 'ciseaux';
    comparaison();

}
function getIA() {
    shifumiOrdi = mathRandomInt(1, 3);
    if (shifumiOrdi == 1) {
        shifumiOrdi = document.getElementById("iaWindow").style.backgroundImage = "url('pierre.png')";
        shifumiOrdi = 'pierre';
    } else if (shifumiOrdi == 2) {
        shifumiOrdi = document.getElementById("iaWindow").style.backgroundImage = "url('feuille.png')";
        shifumiOrdi = 'feuille';
    } else {
        shifumiOrdi = document.getElementById("iaWindow").style.backgroundImage = "url('ciseaux.png')";
        shifumiOrdi = 'ciseaux';
    }
}


function comparaison() {
    for (count = 0; count < 3; count++) {
        shifumi = /* qqch pour reset le choix */;
        document.getElementById("round").innerText = count+1;
        if (shifumiOrdi == 'pierre' && shifumi == 'feuille' || shifumiOrdi == 'feuille' && shifumi == 'ciseaux' || shifumiOrdi == 'ciseaux' && shifumi == 'pierre') {
            compteurUser = compteurUser + 1;
            greenBorderUser();
            redBorderIA();
            alert('Score user ' + compteurUser);
            alert(count+1);
            if (count == 0) {
                greenLedUser1();
                redLedIA1();
            } else if (count == 1) {
                greenLedUser2();
                redLedIA2();
            } else {
                greenLedUser3();
                redLedIA3();
            }
        } else if (shifumiOrdi == 'pierre' && shifumi == 'ciseaux' || shifumiOrdi == 'feuille' && shifumi == 'pierre' || shifumiOrdi == 'ciseaux' && shifumi == 'feuille') {
            compteurOrdi = compteurOrdi + 1;
            redBorderUser();
            greenBorderIA();
            alert('Score IA ' + compteurOrdi);
            alert(count+1);
            if (count == 0) {
                redLedUser1();
                greenLedIA1();
            } else if (count == 1) {
                redLedUser2();
                greenLedIA2();
            } else {
                redLedUser3();
                greenLedIA3();
            }
        } else {
            alert('égalité');
            alert(count+1);
        }
    }
}