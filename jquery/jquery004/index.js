$("h1").click(() => {$("p").html("You <em>got</em> it!")})

$("#itexto").keypress(function(event) {
    if(event.key === "b" || event.key === "B"){
        $("#itexto").val(" ");
        alert("Essa letra nao é permitida. Ele nao!");
        
    }
})

$("h1").on("mouseover", () => {$("h1").css("color", "purple");})