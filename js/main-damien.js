// $(document).ready(function () {
//     $("#but").click(function () {
//         console.log("Hello World!");
//     });
// });$(function () {
    $("#but", "body").click(function () {
        console.log("Hello World!");
    });
});$(function () {
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
});// Utilisation de la méthode .attr(nomAttribut) 
// qui permet de récupérer la valeur  
// de l'attribut passé en paramètre
// Affiche "blue"
$(function () {
    console.log($("p").attr("class"));
});// Utilisation de la méthode .attr(nomAttribut) et
// de .each() qui permet de récupérer toutes 
// les valeurs de l'attribut passé  en paramètre
// Affiche "blue"
$(function () {
    $("p").each(function(){
        console.log($(this).attr("class"));
    });   
});// Utilisation de la méthode .length
// qui permet de déterminer le nombre 
// d'éléments sélectionnés
// Affiche 3
$(function () {
    console.log($("p").length);
});// Utilisation de la méthode .eq(i)
// qui permet de choisir l'élément 
// ayant l'indice passé en paramètre
// Affiche "blue"
$(function () {
    //console.log($("p").eq(0));
    console.log($("p:eq(0)"));
});// Opérations 
// p:lt(i) : parag < indice i
// p:gt(i) : parag > indice i
// p:even : parag d'indice pair et p:odd d'indice impair
// p:first : premier parag et p:last : dernier parag
// input:text : On récupère les inputs de type text