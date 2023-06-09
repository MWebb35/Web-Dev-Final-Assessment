//TO TOP BUTTON (Adapted from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
// Retrieve Button
let mybutton = document.getElementById("topBtn");

// 20px down the page, the top button is shown
window.onscroll = function() {scrollFunction()};

//Displays the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else { //Hides the button
    mybutton.style.display = "none"; 
  }
}

// On topBtn click, go to the top of the page 
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//VALIDATE FORM 
function validateReview() {
  var review = document.forms["reviewForm"]["firstName"].value;
  if (review == ""){
    alert("Please enter your first name out to continue");
    return false;
  }
}

//VALIDATE CONTACT FORM 
function validateForm(){
  var contactName = document.forms["contactForm"]["firstName"].value;
  var contactEmail = document.forms["contactForm"]["email"].value;
  var contactMessage = document.forms["contactForm"]["message"].value;

  //Checks if variable null then returns the appropriate message
  if (contactName == ""){
    alert("Please enter your first name to continue");
    return false;
  } else if (contactEmail == ""){
    alert("Please enter your email to continue");
    return false;
  } else if (contactMessage == ""){
    alert("Please enter a message to continue");
    return false;
  } else {
    alert("Thank you. We're processing your message and we'll get back to you shortly");
    return true;
  }
}

//GALLERY - Adapted from: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Changes the slides gallery
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if(slides.length == 0) return;

  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
