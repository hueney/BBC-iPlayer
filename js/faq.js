$(document).ready(function(){
    $("#q1").click(function(){
        $("#a1").slideToggle();
        $("#q1").toggleClass("element-active")
    });
    $("#q2").click(function(){
        $("#a2").slideToggle();
        $("#q2").toggleClass("element-active")
    });
    $("#q3").click(function(){
        $("#a3").slideToggle();
        $("#q3").toggleClass("element-active")
    });
    $("#q4").click(function(){
        $("#a4").slideToggle();
        $("#q4").toggleClass("element-active")
    });
});