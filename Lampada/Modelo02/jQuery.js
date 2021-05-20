$(document).ready(function(){

    $("button").click(function() {

     var imagem = $("img");
     if(imagem.attr("src") == "lamp_off.gif") {
         imagem.attr("src" , "lamp_on.gif");
         $("button").text("Desligar");

     } else {
         imagem.attr("src","lamp_off.gif");
         $("button").text("Ligar");
     }
    
    });

});
