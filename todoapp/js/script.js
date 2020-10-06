// Line-through each checked element
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

// When clicked, light a star up => important
var stars = document.getElementsByClassName("stars");
var i;
for (i = 0; i < stars.length; i++) {
    stars[i].onclick = function () {
        var target = this;
        if (target.style.color != 'yellow' && target.style.opacity != '1') {
            target.style.color = 'yellow';
        } else {
            target.style.color = '';
        }
    }
}

// Click on a close button to hide the current list item
var bins = document.getElementsByClassName("bin");
var j;
for (j = 0; j < bins.length; j++) {
    bins[j].onclick = function () {
        var li = this.parentElement;
        li.style.display = "none";
    }
}

// Add a new task
function addTask() {
    var newTask = document.getElementById('newTask').value;
    var ul = document.getElementById('myList');
    var li = document.createElement('li');
    li.className = 'myItem';
    var input = document.createElement('input');
    input.className = 'mr-3 myCheck';
    input.setAttribute('type', 'checkbox');
    input.setAttribute('onclick', 'check()');
    var star = document.createElement('i');
    star.className = 'fas fa-star mx-auto stars';
    //star.setAttribute('onclick', 'importantTask()')
    var bin = document.createElement('i');
    bin.className = 'fas fa-trash-alt float-right mr-2 my-1 bin';
    if (newTask != '') {
        li.appendChild(input);
        li.appendChild(document.createTextNode(newTask));
        li.appendChild(star);
        li.appendChild(bin);
        ul.appendChild(li);
    }
    for (i = 0; i < stars.length; i++) {
        stars[i].onclick = function () {
            var target = this;
            if (target.style.color != 'yellow' && target.style.opacity != '1') {
                target.style.color = 'yellow';
            } else {
                target.style.color = '';
            }
        }
    }
    for (j = 0; j < bins.length; j++) {
        bins[j].onclick = function () {
            var li = this.parentElement;
            li.style.display = "none";
        }
    }
}

var createBtn = document.getElementById('createBtn');
createBtn.addEventListener('click', addTask);

// idée => quand clicked important va en haut de la liste (:


/****** Description ******/

// Add description
var description = document.getElementById('descr').value;
var descriptionArea = document.getElementById('descrArea');
function addDescritpion() {
    descriptionArea.innerText = description;
}

var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addDescritpion);