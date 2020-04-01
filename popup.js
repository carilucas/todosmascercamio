var closePopupMap = document.getElementById('close-popup-mapa-home');
var confirmarUbicacion = document.getElementById('confirmar-ubicacion');
var openPopupMap = document.getElementById('buscar');
var popupMap = document.getElementById('popup');
var resultsSection = document.getElementById('section-2-buscar');
openPopupMap.onclick = function(){
	popupMap.classList.add('show-popup-mapa-home');
}
closePopupMap.onclick = function(){
	popupMap.classList.remove('show-popup-mapa-home');
}
confirmarUbicacion.onclick = function(){
	popupMap.classList.remove('show-popup-mapa-home');
	resultsSection.style.display = 'block';
	resultsSection.scrollIntoView();
}