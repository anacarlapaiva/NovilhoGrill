"use strict";

$(document).ready(function () {
  // Este script faz o efeito de scroll pelo site de forma mais bonita *--*, o modo de uso é simples, você coloca em um link #.... e a seção que você deseja que este link leve na MESMA página e ele irá fazer o efeito de scroll
  var windowHeight = $(window).height();
  $("").css("min-height", windowHeight);
  $('a[href*=\\#]:not([href=\\#])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        var walkPixels = target.offset().top;
        $('html,body').animate({
          scrollTop: walkPixels
        }, 2000);
        return false;
      }
    }
  });

  if ($('.menu-responsive').lenght > 0) {
    setMaxHeight($('.menu-responsive'));
  } //Este é o código usado ali no header, ele pega a class .block-bar e aplica uma mudança chamada de "change", fazendo funcionar o nosso menu mobile, e ter um menuzinho lindo *--*


  $('.block-bar').click(function () {
    if ($(this).hasClass('change')) {
      $(this).removeClass('change');
      $('.menu-mobile').fadeOut();
    } else {
      $(this).addClass('change');
      $('.menu-mobile').fadeIn();
    }
  }); //Este é o código da tela de "Loading" ela aparece assim que você abre o site, ali temos #status e #placeholder que são ID nas nossas páginas HTML, básicamente faz um efeito de "FADE" e quando acaba o tempo mostra o nosso site

  window.setTimeout(function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
      'overflow': 'visible'
    });
  }, 4000); // Este é o código do "Owl-carousel"

  $('.owl-depoimentos').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    animateOut: 'fadeOut',
    navText: ["<img src='images/botao-esquerda.png'>", "<img src='images/botao-direto.png'  class='block'>"],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        mouseDrag: false,
        touchDrag: true,
        items: 3
      }
    }
  }); //Mascaras

  var SPMaskBehavior = function SPMaskBehavior(val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
      spOptions = {
    onKeyPress: function onKeyPress(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
  };

  if ($(".cep-mask").length > 0) {
    $(".cep-mask").mask('99.999-999');
  }

  if ($(".date-mask").length > 0) {
    $(".date-mask").mask('99/99/9999');
  }

  if ($(".number-mask").length > 0) {
    $(".number-mask").mask('00000');
  }

  if ($(".cvv-mask").length > 0) {
    $(".cvv-mask").mask('999');
  }

  if ($(".cpf-mask").length > 0) {
    $(".cpf-mask").mask('999.999.999-99');
  }

  if ($(".phone-mask").length > 0) {
    $('.phone-mask').mask(SPMaskBehavior, spOptions);
  }
});