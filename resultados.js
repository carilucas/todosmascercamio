var icon_categorias = document.getElementById('icon-categorias');
var menu_categorias = document.getElementById('menu-categorias');

icon_categorias.onclick = function(){
	menu_categorias.classList.toggle('mostrar-categorias');
}

var listaLocales = document.getElementById('lista-locales');
var mapa = document.getElementById('mapa');
var expand = document.getElementById('boton-expand');
var localContainer = document.getElementById('local-container');
var fotoLocal = document.getElementsByClassName('foto-local');
var iconList = document.getElementById('icon-list');
var iconMap = document.getElementById('icon-map');
var verMapaText = document.getElementById('ver-mapa');
var verListaText = document.getElementById('ver-lista');


expand.onclick = function(){
	listaLocales.classList.toggle('hide-locales');
	mapa.classList.toggle('expand-map');
	iconMap.classList.toggle('display-none');
	iconList.classList.toggle('display-none');
    verMapaText.classList.toggle('display-none');
    verListaText.classList.toggle('display-none');
}

var menuIconos = document.getElementById('menu-iconos');
var posToFixMenu = document.getElementById('pos-to-fix-menu');
var posMenuIcons = posToFixMenu.getBoundingClientRect().top;
var posSection4Buscar = document.getElementById('section-4-buscar').getBoundingClientRect().top;
var anchoNavegador = document.body.clientWidth;

console.log(anchoNavegador);
window.onscroll = function (){  
    // En la variable scroll se almacena la posición cada vez que se mueve el scroll
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scroll);
    // Con este código puedes hacer que algo suceda entre la posición 300 y 400
    if (anchoNavegador<=550) {
        if(scroll >= 1100){
            menuIconos.classList.add('menu-fixed');
        }else{
            menuIconos.classList.remove('menu-fixed');
            menu_categorias.classList.remove('mostrar-categorias');
        }
        if(scroll >= 3200){
            menuIconos.classList.remove('menu-fixed');
            menu_categorias.classList.remove('mostrar-categorias');
        }
    }else if (anchoNavegador>550 && anchoNavegador<=768) {
        if(scroll >= 900){
            menuIconos.classList.add('menu-fixed');
        }else{
            menuIconos.classList.remove('menu-fixed');
            menu_categorias.classList.remove('mostrar-categorias');
        }
        if(scroll >= 3200){
            menuIconos.classList.remove('menu-fixed');
            menu_categorias.classList.remove('mostrar-categorias');
        }
    }else{
        if(scroll >= 560){
        menuIconos.classList.add('menu-fixed');
        }else{
            menuIconos.classList.remove('menu-fixed');
            menu_categorias.classList.remove('mostrar-categorias');
        }
        if(scroll >= 2100){
            menuIconos.classList.remove('menu-fixed');
            menu_categorias.classList.remove('mostrar-categorias');
        }
    }
}