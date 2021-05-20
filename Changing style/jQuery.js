$(document).ready (function() {

    $("button").click(function(){

        $("p:eq(0)").text("Aula de programação para web");
        $("p:eq(1)").css("font-size", 40);
        $("p:eq(2)").css("color", "blue");
        $("p:eq(3)").css("text-align", "center");
        $("p:eq(4)").css({"color":"green", "font-size":10});
        $("p:eq(5)").text("JavaScript não é Java!").css({"color":"red", "font-weight":"bold"});

        $("p:odd").css("background-color", "yellow");

    });
});