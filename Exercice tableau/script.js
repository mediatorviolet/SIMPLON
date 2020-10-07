var table1 = [4, 8, 7, 9, 1, 5, 4, 6];
var table2 = [7, 6, 5, 2, 1, 3, 7, 4];


var tableau1 = document.getElementById('table1');
var tableau2 = document.getElementById('table2');
var tableauTot = document.getElementById('tableTotal')

function display(t, tableau) {
    for (var i = 0; i < t.length; i++) {
        var td = document.createElement('td');
        td.innerHTML = t[i];
        tableau.appendChild(td)
    }
}

function sum(t1, t2) {
    var tabTot = [];
    for (var i = 0; i < t1.length; i++){
        tabTot.push(t1[i] + t2[i]);
    }
    return tabTot;
}

display(table1, tableau1);
display(table2, tableau2);
display(sum(table1, table2), tableauTot);