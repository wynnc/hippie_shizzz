$(document).ready(function(){
    // var fitnessType = $(".fitness-type").val();
    // console.log("this is fitnessType: " + fitnessType);
    $("select.fitness-type").change(function(){
        var fitnessType = $(this).children("option:selected").val();
        console.log(fitnessType);
        if(fitnessType === "HIIT"){
            $(".subFitness option[value='1']").text("CASEY ROCKS!!!");
            console.log("hellerrr");
        }
    })

    $('select').formSelect();


  });