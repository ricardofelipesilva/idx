
var menu = document.querySelector("header");
var navbar = document.querySelector(".navbar-nav");



var posicaoScroll;
$(document).scroll(function () { // oscultador de scroll
    posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
    if (posicaoScroll != 0) {
    	menu.classList.add("corRosa");
    }else{
    	menu.classList.remove("corRosa");
    }
})

var botao = menu.querySelector("header .navbar-toggler");
var botaoFechar = menu.querySelector("header .navbar-toggler-fechar");
var menu_ativado = false;

$( "header .navbar-toggler" ).click(function() {
	console.log(navbar);
if(menu_ativado == false){
  	menu.classList.remove("corRosa");
 	navbar.classList.add("mobile_ativado");
 	botao.style.display = "none";
 	botaoFechar.style.display = "block";
 	menu_ativado = true;
}else{
	botaoFechar.style.display = "none";
	botao.style.display = "block";
	menu.classList.add("corRosa");
	navbar.classList.remove("mobile_ativado");
	menu_ativado = false;
}
});