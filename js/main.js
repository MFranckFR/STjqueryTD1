/*
TD jquery
*/

$(document).ready(function(){
    $("#btnIntro").click(function(){
        $("#q1 div.resultat p.resultat").text(
            $("#q1 div.resultat p.resultat").text() == 'Hello' ? '' : 'Hello'); 
    })
});
//$(document).ready(function(){..});
//$(function(){$("#btnIntro","body").click(function(){console.log('Hello bis')})});