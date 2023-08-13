// SCROLL ANIMATION

const boxes = document.querySelectorAll(".box");
const menuBar = document.querySelector(".menu-wrap");
const contentWrapper = document.getElementById("content");

const removeContent = () => {
  contentWrapper.classList.toggle("none")
}

menuBar.addEventListener("click", removeContent)

//the explore button on the welcome page which will direct to the home page 
 function myFunction() {
      window.location.href = "Home.html";
    }

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box, idx) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}


// Back to top button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Subscribe form - open and close form
document
  .querySelector("#open-subscribe-form")
  .addEventListener("click", function () {
    document.querySelector(".subscribe-form").classList.add("active");
  });

document
  .querySelector(".subscribe-form .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".subscribe-form").classList.remove("active");
  });

// Display thank you for subscribing message
document.getElementById("show-message").addEventListener("click", function () {
  alert("Thank you for subscribing");
});

// Signup and Login forms
// Get the modal for Sign up and Login forms
var modal1 = document.getElementById("id01");
var modal2 = document.getElementById("id02");

// Display "thank you for signing up" message
document.getElementById("signup").addEventListener("click", function () {
  alert("Thank you for Signing up");
});


