/*
TD jquery
*/

$(document).ready(function(){
    $("#btnIntro").click(function(){
        $("#q1 div.resultat p.resultat").text(
            $("#q1 div.resultat p.resultat").text() == 'Hello' ? '' : 'Hello'); 
    });

    $("#btnIntro2").click(function(){
        // flip/flop button
        if($("#q2 div.resultat p.resultat").text() == 'Hello'){
            $("#q2 div.resultat p.resultat").text('');
            $(this).val('Montre le Hello')
        }else{
            $("#q2 div.resultat p.resultat").text('Hello');
            $(this).val('Cache le Hello');
        }
    })
});
//$(document).ready(function(){..});
//$(function(){$("#btnIntro","body").click(function(){console.log('Hello bis')})});