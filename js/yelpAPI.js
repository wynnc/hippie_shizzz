// var name = "";
// var address = "";
// var phone = "";
// var url = "";
// var image = "";
var zipCode = "";
var category = "";
var radius = "";
// var description = "";




// var zipCode = $("")

$("#yelpAPI").on("click", function () {
    $("#results").show().empty();
    var str = $(".radius").val();
    // var radius = str.split(" ");
    console.log("this is the radius" + str);


    zipCode = $("#yelpRadii").find("option:selected").attr("data-value");
    fitnessType = $("select#fitnessTypeYelp").val();

    whichType(fitnessType);


function whichType(categories) {
    switch (categories) {
        case "Yoga":
            category = "yoga"
            
            break;
        case "Tai Chi":
            category = "taichi"
            break;

        case "Bootcamp":
            category = "bootcamps"
            break;

        case "Other":
            category = "active"
            break;

        default:

            category = "fitness"
        // code block
    }
    return category;
};



var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + zipCode + "&categories=" + category;
// console.log(queryURL);
// var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?categories=sports-active-life&location=80232";
var apiKey = "goxoYCUXVSwcnKgBvWfHfc6wCMdXCqFKmgLEI7wuEbFCsumPG4mxKY5PIceV3YrEvGCa6Ssm94pk7VrCu-T_AQvVLt1q5ivHxy7anMWa4pSyPZJbUJ0bZmqBVtLyXHYx";


$.ajax({
    url: queryURL,
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + apiKey
    },
    crossDomain: true,
    dataType: 'json',
}).then(function (response) {
     console.log(response);

     $("#results").append($("<div>").addClass("row").attr("id", "yelpAPI-cards"));
    for (var i = 0; i < 3; i++) {
        // var newColumn = $("<col-md>")
        var newCol = (`<div class='col s12 m4' />`)
        var newCard = $("<div>").addClass("card");
        var cardTitle = $("<span>").addClass("card-title");
        var cardContent = $("<div>").addClass("card-content");
        var img = $("<img>");
        // var newPar = $("<p>")
        var newCardImg = $("<div>").addClass("card-image");
        var cardAction = $("<div>").addClass("card-action");
        

        var name = response.businesses[i].name;
        var image = response.businesses[i].image_url;
        var url = response.businesses[i].url;
        var address = response.businesses[i].location.display_address;
        var phone = response.businesses[i].phone;
        var description = response.businesses[i].description;

        // cardContent.append(`<p id="phone">${phone}</p>`)

        // newCard.append(`<div class='card-title' id="name">${name}</div>`)
        $(img).attr("src", image);
        $(newCardImg).append(img, cardTitle.text(name));
        $(cardContent).append(address, phone, description)
        // newPar.append();
        // cardContent.append(newPar);
        $(cardAction).append(`<a href=${url} id="url">${name}</a>`)
        $(newCard).append(newCardImg, cardContent, cardAction);
        $(newCol).append(newCard);
        $("#yelpAPI-cards").append(newCol);

    }


})
})

