
/**
*Configurações gerais da página inicial. 
*Criado por Ricardo Felipe 13/07/2019.
*
*Funções / Procedimentos:
*
*Fechar Menu tem relação com a index e com as demais páginas criadas. 
*
*Procedimento de verificarPosicao extende as configurações do meu em menu.js
*
*variáveis da  folha de scripts:
*
*menu | posicaoScroll
*
*Mais:
*
*Esta folha é responsável pelas definições dos slides.
**/

var menu = document.querySelector('header');
var posicaoScroll;

$(function() {
	verificaPosicao();
});

function verificaPosicao(){
	 posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
    if (posicaoScroll != 0) {
    	menu.classList.add('corRosa');
    	document.querySelector('.linkLogo').classList.add('linkLogoMenor');
    }else{
    	menu.classList.remove('corRosa');
    	document.querySelector('.linkLogo').classList.remove('linkLogoMenor');
    }
}

/**
*Configurações dos Silides 
**/

var slides = document.querySelectorAll('.carrosel .slide');
for (var i = slides.length - 1; i >= 0; i--) {
    if(((i+1) % 3) == 0){
      slides[i].classList.add('slideFinal');  
    }else if(((i+1) % 2) == 0){
      slides[i].classList.add('slideMeio');  
    }else if(((i+1) % 5) == 0){
      slides[i].classList.add('slideMeio');  
    }  
}

 $(document).ready(function(){
           $('.slider_clientes').slick({
              infinite: false,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 3,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true

                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 992,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                  }
                }
              ]
            });
          });

 $(function() {   
  $('a').click(function(){  
   $('html, body').animate({  
     scrollTop: $( $(this).attr('href') ).offset().top  
   }, 1500);  
   return false;  
  });   
 }); 

