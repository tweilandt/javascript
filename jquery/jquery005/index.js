$("#first-parag").before("<button>New Button with jQuery</button>");
$("#first-parag").prepend("<input type='text' name='inputJQuery' id='ijqueryinput' placeholder='input qith jQuery'>");
$("#first-parag").after("<p>New Paragraph </p>");
$("#first-parag").append("<button>Appeding button with jQuery</button>");

$("#second-button").click(function(){
    $("h1").toggle(); 
    $("#first-parag").fadeToggle();
    $("#second-parag").slideToggle();
});

$("#first-button").click(function(){
    $("h1").animate({opacity: 0.5});
    $("p").animate({margin: 0});
})

$("#third-button").click(function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});