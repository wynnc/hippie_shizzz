$(document).ready(function () {
    // var fitnessType = $(".fitness-type").val();
    $('select').formSelect();
    // console.log("this is fitnessType: " + fitnessType);
    $("select.fitness-type").change(function () {
        var fitnessType = $(this).children("option:selected").val();
        var subType1 = $(".s12.m4:nth-of-type(1) .input-field:nth-of-type(2) li:nth-of-type(2) span");
        var subType2 = $(".s12.m4:nth-of-type(1) .input-field:nth-of-type(2) li:nth-of-type(3) span");
        var subType3 = $(".s12.m4:nth-of-type(1) .input-field:nth-of-type(2) li:nth-of-type(4) span");
        var htmlSubType1 = $("#opt1")
        var htmlSubType2 = $("#opt2")
        var htmlSubType3 = $("#opt3")
        // console.log(fitnessType);
        if (fitnessType === "Bootcamp") {
            subType1.text("HIIT");
            htmlSubType1.text("HIIT");
            subType2.text("Beach Bod");
            htmlSubType2.text("Beach Bod");
            subType3.text("Crossfit");
            htmlSubType3.text("Crossfit");
        } else if (fitnessType === "Dance") {
            subType1.text("Hip Hop");
            htmlSubType1.text("Hip Hop");
            subType2.text("Zumba");
            htmlSubType2.text("Zumba");
            subType3.text("Belly Dance");
            htmlSubType3.text("Belly Dance");
        } else if (fitnessType === "Yoga") {
            subType1.text("Hatha");
            htmlSubType1.text("Hatha");
            subType2.text("Vinyasa");
            htmlSubType2.text("Vinyasa");
            subType3.text("Restorative");
            htmlSubType3.text("Restorative");

        }
    });

    $.ajax({
        url: "https://favqs.com/api/qotd",
        method: "GET"
    }).then(function (response) {
        $("#quote-api").text(response.quote.body);
        $(".author").text(response.quote.author);
//         console.log(response);
    })



});



$(".inPerson").on("click", function () {
    var whichOne = ($(this).attr("id"));
    // console.log(whichOne);
    var x = $("#" + whichOne + "-zipCode").val();
    // console.log(x);
    // checkInp();
})

function checkInp(x) {
    // var x = $(".zipcode").val().trim();
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(x);;
    // console.log("this is the zip code " + x);
    // console.log("zip code is valid: " + isValidZip);
    //   var x=document.forms["myForm"]["age"].value;
    if (isNaN(x)) {
        alert("Must input numbers for zip code.");
        return false;

    } else if (!isValidZip) {
        alert("Please enter a valid zip code.");
    }
}
