console.log("Hello from index.js");

// Get the modal
var modal = document.getElementById("signupModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("openSignupModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    modal.style.display = "block";
  }
}

for (let i = 0; i < span.length; i++) {
  span[i].onclick = function () {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}