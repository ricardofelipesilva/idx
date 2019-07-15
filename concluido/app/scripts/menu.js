/**
*Configuraçõe do menu. 
*Criado por Ricardo Felipe 14/07/2019.
*
*Funções / Procedimentos:
*
*Fechar Menu tem relação com a index e com as demais páginas criadas. 
*Em script.js há um código para verificar a posição atual do scroll para setar a cor da barra.
*Os procedimentos não possuem retorno.
*
*variáveis da  folha de scripts:
*
*menu | navbar | posicaoScroll | botao | botaoFechar |  menu_ativado.
**/

var menu = document.querySelector('header');
var navbar = document.querySelector('.navbar-nav');
var botao = menu.querySelector('header .navbar-toggler');
var botaoFechar = menu.querySelector('header .navbar-toggler-fechar');
var menu_ativado = false;
var posicaoScroll;

$(document).scroll(function () { 
    posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
    verificaPosicao();
})

$( 'header .navbar-toggler' ).click(function() {
if(menu_ativado == false){
  	menu.classList.remove('corRosa');
 	navbar.classList.add('mobile_ativado');
 	botao.style.display = 'none';
 	botaoFechar.style.display = 'block';
 	menu_ativado = true;
}else{
	fecharMenu();
}
});

function fecharMenu(){
    if(menu_ativado == true){
    navbar.classList.remove('mobile_ativado');
    menu_ativado = false;
    botaoFechar.style.display = 'none';
    botao.style.display = 'block';
    menu.classList.add('corRosa');
    navbar.classList.remove('mobile_ativado');
    menu_ativado = false;
    verificaPosicao();
    }
}