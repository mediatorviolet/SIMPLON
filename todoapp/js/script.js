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

/****** Pagination ******/

function pagination(currentPage) {
    var numberItems = $('.list-group-item').length;
    var limitPerPage = 5;
    // Round to upper number
    var totalPages = Math.ceil(numberItems / limitPerPage);

    if (currentPage > 1) {
        $('#page .list-group-item').slice(limitPerPage * currentPage).hide(); // hide all elements after current page
        // Pagination before current
        for (var i = 1; i < currentPage; i++) {
            $('.pagination').append('<li class="page-item current-page"><a class="page-link" href="#">' + i + '</a></li>');
        }
        // Current page
        $('.pagination').append('<li class="page-item current-page active"><a class="page-link" href="javascript:void(0)">' + currentPage + '</a></li>');

        // Pagination after current
        for (var i = currentPage + 1; i <= totalPages; i++) {
            $('.pagination').append('<li class="page-item current-page"><a class="page-link" href="#">' + i + '</a></li>'); // Insert page number into pagination tabs
        };
    } else {
        $('#page .list-group-item').slice(limitPerPage).hide(); // Hide all elements after current page
        // Current page
        $('.pagination').append('<li class="page-item current-page active"><a class="page-link" href="javascript:void(0)">' + currentPage + '</a></li>');

        // Pagination after current
        for (var i = 2; i <= totalPages; i++) {
            $('.pagination').append('<li class="page-item current-page"><a class="page-link" href="#">' + i + '</a></li>'); // Insert page number into pagination tabs
        };
    }

    $('.pagination li.current-page').on('click', function () {
        // Check if page number that was clicked on is the current page that is being displayed
        if ($(this).hasClass('active')) {
            return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
        } else {
            var currentPage = $(this).index() + 1; // Get current page number

            $('.pagination li').removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
            $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
            $('#page .list-group-item').hide(); // Hide all items in loop, this case, all the list groups

            var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

            // Loop through total items, selecting a new set of items based on page number
            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $('#page .list-group-item:eq(' + i + ')').show(); // Show items from the new page that was selected
            }
        }
    });
}

pagination(1);

// Add a new task
function addTask() {
    var newTask = document.getElementById('newTask').value;
    var ul = document.getElementById('myList');
    var li = document.createElement('li');
    li.className = 'myItem list-group-item';
    var input = document.createElement('input');
    input.className = 'mr-3 myCheck';
    input.setAttribute('type', 'checkbox');
    input.setAttribute('onclick', 'check()');
    var star = document.createElement('i');
    star.className = 'fas fa-star mx-auto stars';
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

    // Supprime dernière tâche dans input
    $('input[id="newTask"]').val(null);

    // get current page of paginator
    var currentPage = $(".pagination li.current-page.active").index() + 1;
    // update pagination
    $(".pagination").empty();
    pagination(currentPage);
}

var createBtn = document.getElementById('createBtn');
createBtn.addEventListener('click', addTask);
