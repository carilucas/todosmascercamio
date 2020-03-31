var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

var closeNews = document.getElementById('close-news');
var newsContainer = document.getElementById('news-container');

closeNews.onclick = function(){
  newsContainer.style.display = 'none';
}