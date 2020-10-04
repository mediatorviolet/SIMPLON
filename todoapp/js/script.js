function check() {
    var checkbox = document.getElementsByClassName("myCheck");
    var lineThrough = document.getElementsByClassName("myList");
    for (var i = 0; i < lineThrough.length; i++){
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

function addTask(){
    var newTask = document.getElementById('newTask');
    var addBtn = document.getElementById('addBtn');
    if (addBtn.clicked == true && newTask != ''){
        
    }
}

// idée => quand clicked important va en haut de la liste (: