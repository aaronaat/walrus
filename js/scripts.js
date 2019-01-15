$(document).ready(function() {
  $(".clickable").click(function(){
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".seal-slidein").click(function(){
    $("#seal-hidden").slideUp();
    $("#seal-showing").slideDown();
  });
  $(".seal-slideout").click(function(){
    $("#seal-showing").slideUp();
    $("#seal-hidden").slideDown();
  });

  $(".sealion-slidein").click(function(){
    $("#sealion-hidden").fadeOut();
    $("#sealion-showing").fadeIn();
  });

  $(".sealion-slideout").click(function(){
    $("#sealion-showing").fadeOut();
    $("#sealion-hidden").fadeIn();
  });
  $(".clickabletext").click(function(){
    $("#text-showing").fadeToggle();
    $("#text-hidden").fadeToggle();
  });
});
