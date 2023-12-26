function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns1 = document.getElementsByClassName("dropdown-content1");
        var t;
        for (t = 0; t < dropdowns.length; t++) {
            var openDropdown1 = dropdowns1[i];
            if (openDropdown1.classList.contains('show')) {
                openDropdown1.classList.remove('show');
            }
        }
    }
}


var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("more")[0];
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementsByClassName("more2")[0];
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
