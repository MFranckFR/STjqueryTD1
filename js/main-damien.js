// $(document).ready(function () {
//     $("#but").click(function () {
//         console.log("Hello World!");
//     });
// });$(function () {
    $("#but", "body").click(function () {
        console.log("Hello World!");
    });

$(function () {
    $("#but", "body").click(function () {
        //$("#container").text("<p>Hello</p>");
        //$("#container").html("<p>Hello</p>");
        $("div#container").prepend("<h1>hello</h1>");
        $("div#container").append("<h1>Bye!</h1>");
    });
});$(function () {
    $("#but", "body").click(function () {
        $("div p:nth-child(1)").prepend("<p>test</p>")
    });
});// Utilisation de la m�thode .attr(nomAttribut) 
// qui permet de r�cup�rer la valeur  
// de l'attribut pass� en param�tre
// Affiche "blue"
$(function () {
    console.log($("p").attr("class"));
});// Utilisation de la m�thode .attr(nomAttribut) et
// de .each() qui permet de r�cup�rer toutes 
// les valeurs de l'attribut pass�  en param�tre
// Affiche "blue"
$(function () {
    $("p").each(function(){
        console.log($(this).attr("class"));
    });   
});// Utilisation de la m�thode .length
// qui permet de d�terminer le nombre 
// d'�l�ments s�lectionn�s
// Affiche 3
$(function () {
    console.log($("p").length);
});// Utilisation de la m�thode .eq(i)
// qui permet de choisir l'�l�ment 
// ayant l'indice pass� en param�tre
// Affiche "blue"
$(function () {
    //console.log($("p").eq(0));
    console.log($("p:eq(0)"));
});// Op�rations 
// p:lt(i) : parag < indice i
// p:gt(i) : parag > indice i
// p:even : parag d'indice pair et p:odd d'indice impair
// p:first : premier parag et p:last : dernier parag
// input:text : On r�cup�re les inputs de type text