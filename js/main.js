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

    $("#button1").click(function(){
        $("#exo1>div.resultat textarea").css("border", "dashed black");
        $("#exo1>div.resultat textarea").last().after('<p>jQuery</p><p>Javascript</p>');
        $("#exo1>div.resultat>p").css('border', 'solid blue');
    });

    $("#exo2 button.action").click(function(){
        $("#exo2>div.resultat p:last").addClass('w3r_background')
    });



});
//$(document).ready(function(){..});
//$(function(){$("#btnIntro","body").click(function(){console.log('Hello bis')})});

/* Exo 3 */
function enleverLiens() {
}
function enleverGras() {
}
function enleverItalique() {
}
function enleverDecor() {
}
function viderBoutons() {
}
function voirCode() {
}
function liensEnBoutons() {
    $("#contenu a").each(function(){
        var elt = $("<button></button>").text($(this).text()) ;
        (elt).attr("onclick", `document.location="${$(this).attr("href")}"`);
        $(this).replaceWith(elt);
    });
}

function dupliquerTexte() {
    $("#contenu").append($("#contenu").html());
}
function regrouperLiens(elt) {
    $("#contenu a").each(e => $(elt).after($(e).html()));
}
function mettreTitres(elt) {
    $("#contenu").before($("<h2>Un texte</h2>").css('text-align', 'center'));
    $("#contenu").after($("<h2>Les boutons</h2>").css('text-align', 'center'));
    $(elt).prop('disabled', true);

}
function regrouperTitres(elt) {
    $("#contenu a").each(e => $(e).html())
}
function colorer() {
    const colors=['red', 'blue', 'green'];
    const randcolor = colors[Math.floor(Math.random() * colors.length)];
    $("#contenu span.titre2").css("color", randcolor);

    $("#contenu span.bleu").css("color", "blue");
    $("#contenu span.rouge").css("color", "red");
    $("#contenu span.vert").css("color", "green");
}
function semantique() {
    $("#contenu span.italique").css("font-style", "italic");
    $("#contenu span.gras").css("font-weight", "bold");
    $("#contenu span.souligne").css("text-decoration", "underline");
}