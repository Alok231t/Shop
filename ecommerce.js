// JavaScript code

// Add event listener to toggle the menu
document.querySelector(".ham").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

// Add event listener to close the menu
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".menu").classList.remove("active");
});

// JavaScript code for image slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("img-slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Function to handle click on Home button
document.getElementById("home").addEventListener("click", function () {
  // Replace this with your desired functionality
  console.log("Home button clicked");
});

// Function to handle click on Shop button
document.getElementById("shop").addEventListener("click", function () {
  // Replace this with your desired functionality
  console.log("Shop button clicked");
});

// Add similar event listeners for other navigation links as needed
// For example:
document.getElementById("about").addEventListener("click", function () {
  // Replace this with your desired functionality
  console.log("About button clicked");
});

document.getElementById("contact").addEventListener("click", function () {
  // Replace this with your desired functionality
  console.log("Contact button clicked");
});

// You can customize the functionality within the event listeners to suit your requirements.
