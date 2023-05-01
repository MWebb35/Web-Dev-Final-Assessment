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
    alert("Please enter your first name out to continue")
    return false;
  }
}