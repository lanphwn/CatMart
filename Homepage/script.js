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
var modal = document.getElementById("myModalLogin");
var btn = document.getElementById("login");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}

//PopUp dang ky
var modal_2 = document.getElementById("myModaRegis");
var btn_2 = document.getElementById("register");
var btn_3 = document.getElementById("link_reg");
var span_2 = document.getElementsByClassName("close2")[0];
btn_2.onclick = function () {
  modal_2.style.display = "block";
}
btn_3.onclick = function () {
  modal_2.style.display = "block";
  modal.style.display = "none";
}
span_2.onclick = function () {
  modal_2.style.display = "none";
}


