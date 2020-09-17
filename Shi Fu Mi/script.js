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
function redLedUser() {
    if (count == 0) {
        document.getElementById("led1").style.backgroundColor = "red";
    } else if (count == 1) {
        document.getElementById("led2").style.backgroundColor = "red";
    } else {
        document.getElementById("led3").style.backgroundColor = "red";
    }
}
function greenLedUser() {
    if (count == 0) {
        document.getElementById("led1").style.backgroundColor = "green";
    } else if (count == 1) {
        document.getElementById("led2").style.backgroundColor = "green";
    } else {
        document.getElementById("led3").style.backgroundColor = "green";
    }
}
function redLedIA() {
    if (count == 0) {
        document.getElementById("ledIA1").style.backgroundColor = "red";
    } else if (count == 1) {
        document.getElementById("ledIA2").style.backgroundColor = "red";
    } else {
        document.getElementById("ledIA3").style.backgroundColor = "red";
    }
}
function greenLedIA() {
    if (count == 0) {
        document.getElementById("ledIA1").style.backgroundColor = "green";
    } else if (count == 1) {
        document.getElementById("ledIA2").style.backgroundColor = "green";    
    } else {
        document.getElementById("ledIA3").style.backgroundColor = "green";    
    }
}
function grayLed() {
    var elem = document.getElementsByClassName("ledBtn");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.backgroundColor = "gray";
    }
}

//border functions
function greenBorderUser() {
    document.getElementById("userWindow").style.border = "10px solid green";
}
function redBorderUser() {
    document.getElementById("userWindow").style.border = "10px solid red";
}
function greenBorderIA() {
    document.getElementById("iaWindow").style.border = "10px solid green";
}
function redBorderIA() {
    document.getElementById("iaWindow").style.border = "10px solid red";
}
function whiteBorder() {
    document.getElementById("userWindow").style.border = "10px solid white";
    document. getElementById("iaWindow").style.border = "10px solid white";
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

count = 0;

function comparaison() {
    document.getElementById("round").innerText = count + 1;
    if (shifumiOrdi == 'pierre' && shifumi == 'feuille' || shifumiOrdi == 'feuille' && shifumi == 'ciseaux' || shifumiOrdi == 'ciseaux' && shifumi == 'pierre') {
        compteurUser = compteurUser + 1;
        greenBorderUser();
        redBorderIA();
        greenLedUser();
        redLedIA();
    } else if (shifumiOrdi == 'pierre' && shifumi == 'ciseaux' || shifumiOrdi == 'feuille' && shifumi == 'pierre' || shifumiOrdi == 'ciseaux' && shifumi == 'feuille') {
        compteurOrdi = compteurOrdi + 1;
        redBorderUser();
        greenBorderIA();
        redLedUser();
        greenLedIA();
    } else {
        whiteBorder();
        count = count - 1;
    }
    count = count + 1;
    if (compteurOrdi > compteurUser && count == 3) {
        window.alert('Perdu...');
    } else if (compteurOrdi == compteurUser && count == 3) {
        window.alert('Égalité');
    } else if (compteurOrdi < compteurUser && count == 3) {
        window.alert('GGWP ' + pseudo + '!');
    }
    if (count == 3) {
        reset();
    }
}
function reset() {
    if (confirm('Veux-tu rejouer ?')) {
        document.getElementById("round").innerText = "1";
        document.getElementById("userWindow").style.backgroundImage = "none";
        document.getElementById("iaWindow").style.backgroundImage = "none";
        count = 0;
        compteurOrdi = 0;
        compteurUser = 0;
        grayLed();
        whiteBorder();
    } else {
        document.location.reload();
    }
}
