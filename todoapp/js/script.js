function check() {
    var checkbox = document.getElementsByClassName("myCheck");
    var lineThrough = document.getElementsByClassName("myItem");
    for (var i = 0; i < lineThrough.length; i++) {
        if (checkbox[i].checked == true) {
            lineThrough[i].style.textDecoration = "line-through";
        } else {
            lineThrough[i].style.textDecoration = "none";
        }
    }
}

/*function addTask() {
    var newTask = document.getElementById("newTask");
    var addBtn = document.getElementById("addBtn");
    var newLi = document.createElement('<li id="list" class="myList"><input id="box" type="checkbox" class="mr-3 myCheck" onclick="check()"></li>');
    var textTask = document.createTextNode(newTask);
    document.URL.append(newLi.appendChild(textTask));
}*/

function addTask() {
    var newTask = document.getElementById('newTask').value;
    var ul = document.getElementById('myList');
    var li = document.createElement('li');
    li.className = 'myItem';
    var input = document.createElement('input');
    input.className = 'mr-3 myCheck';
    input.setAttribute('type', 'checkbox');
    input.setAttribute('onclick', 'check()');
    if (newTask != '') {
        li.appendChild(input);
        li.appendChild(document.createTextNode(newTask));
        ul.appendChild(li);
    }
}

var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addTask);

// idée => quand clicked important va en haut de la liste (: