$(document).ready(function(){
    $("#q1").click(function(){
        $("#a1").slideToggle();
        $("#q1").toggleClass("q-active")
    });
    $("#q2").click(function(){
        $("#a2").slideToggle();
        $("#q2").toggleClass("q-active")
    });
    $("#q3").click(function(){
        $("#a3").slideToggle();
        $("#q3").toggleClass("q-active")
    });
    $("#q4").click(function(){
        $("#a4").slideToggle();
        $("#q4").toggleClass("q-active")
    });
});