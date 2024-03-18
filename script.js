// JavaScript code for interactive map using Leaflet library
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);
// JavaScript code for image gallery
var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
// JavaScript code for interactive exhibits
var exhibit = document.getElementById("exhibit");
exhibit.addEventListener("click", function() {
    // Code to display exhibit details or video when clicked
});
// JavaScript code for visitor information
var bookingButton = document.getElementById("book-button");
bookingButton.addEventListener("click", function() {
    // Code to open booking form or link to booking page
});
// JavaScript code for multimedia presentations
var videoPlayer = document.getElementById("video-player");
videoPlayer.addEventListener("play", function() {
    // Code to track video views or interactions
});
