$(document).ready(function(){
    // var fitnessType = $(".fitness-type").val();
    $('select').formSelect();
    // console.log("this is fitnessType: " + fitnessType);
    $("select.fitness-type").change(function(){
        var fitnessType = $(this).children("option:selected").val();
        var subType1 = $(".s12.m4:nth-of-type(1) .input-field:nth-of-type(2) li:nth-of-type(2) span");
        var subType2 = $(".s12.m4:nth-of-type(1) .input-field:nth-of-type(2) li:nth-of-type(3) span");
        var subType3 = $(".s12.m4:nth-of-type(1) .input-field:nth-of-type(2) li:nth-of-type(4) span");
        console.log(fitnessType);
        if(fitnessType === "Bootcamp"){
            subType1.text("HIIT");
            subType2.text("Beach Bod");
            subType3.text("Crossfit");
        }else if(fitnessType === "Dance"){
            subType1.text("Hip Hop");
            subType2.text("Zumba");
            subType3.text("Belly Dance");
        }else if(fitnessType === "Yoga"){
            subType1.text("Hatha");
            subType2.text("Vinyasa");
            subType3.text("Restorative");
        }
    });

    $.ajax({
        url:"https://favqs.com/api/qotd",
        method: "GET"
    }).then(function(response){
        $("#quote-api").text(response.quote.body);
        $(".author").text(response.quote.author);
        console.log(response);
    })



  });