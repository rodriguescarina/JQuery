$(document).ready(function(){

    $("#ligar").click(function() {

        $("#imagem").attr("src", "lamp_on.gif");

    });

     $("#desligar").click(function(){

     $("#imagem").attr("src", "lamp_off.gif");

     });
});