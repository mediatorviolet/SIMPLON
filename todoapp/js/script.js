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
    if (newTask != '') {
        li.appendChild(input);
        li.appendChild(document.createTextNode(newTask));
        li.appendChild(star);
        ul.appendChild(li);
    }
}

var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addTask);

/*function importantTask() {
    var stars = document.getElementsByClassName('stars');
    console.log(stars);
    console.log([...Array(stars.length).keys()]);*/
    /*for (var i = 0; i < star.length; i++) {
        star[i].style.color = 'yellow';
        star[i].style.opacity = '1';
        //break;
    }*/
    /*for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        star.style.color = 'yellow';
        star.style.opacity = '1';
    }
}*/

function importantTask(index){
    var stars = document.getElementsByClassName('stars');
    for (index = 0; index < stars.length; index++){
        stars[index].style.color = 'yellow';
        stars[index].style.opacity = '1';
        break;
    }
}

//var star = document.getElementsByClassName('star');
//star.addEventListener('click', importantTask);

// idée => quand clicked important va en haut de la liste (: