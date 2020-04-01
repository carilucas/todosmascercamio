var newsIndex = 0;
showNews();

function showNews() {
  var i;
  var news = document.getElementsByClassName("noticia");
  for (i = 0; i < news.length; i++) {
    news[i].style.display = "none";  
  }
  newsIndex++;
  if (newsIndex > news.length) {
    newsIndex = 1;
  }    
  news[newsIndex-1].style.display = "flex"; 
  setTimeout(showNews, 8000); // Change image every 2 seconds
}

var closeNews = document.getElementById('close-news');
var newsContainer = document.getElementById('news-container');

closeNews.onclick = function(){
  newsContainer.style.display = 'none';
}