/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//PopUp dang nhap
// Get the modal
var modal = document.getElementById("myModalLogin");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// });

// Get the modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var modal_2 = document.getElementById("myModaRegis");

// Get the button that opens the modal
var btn_2 = document.getElementById("register");

// Get the <span> element that closes the modal
var span_2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn_2.onclick = function () {
    modal_2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_2.onclick = function () {
    modal_2.style.display = "none";
}
// });

