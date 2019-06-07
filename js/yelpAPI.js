var name = "";
var address = "";
var phone = "";
var url = "";
var image = "";
var zipCode = "";
var category = "";
// var zipCode = $("")

$("#APIbtn").on("click", function () {

    zipCode = $(".zipcode").val()
    fitnessType = $("select#fitnessType").val();

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
        default:

            category = "fitness"
        // code block
    }
    return category;
};



var queryURL = "https://cors-anywhere.herokuapp.com/https://api..com/v3/businesses/search?location=" + zipCode + "&categories=" + category;
console.log(queryURL);
// var queryURL = "https://cors-anywhere.herokuapp.com/https://api..com/v3/events?categories=sports-active-life&location=80232";
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
    for (var i = 0; i < 3; i++) {
        // var newColumn = $("<col-md>")
        name = response.businesses[i].name
        var newCard = $("<card>").attr("id='business' + i")
        $(newCard).append(`<div class='card' id="name">${name}</div>`)
        address = response.businesses[i].location.display_address
        $("#results").append(`<div id="address">${address}</div>`)
        phone = response.businesses[i].phone
        $("#results").append(`<div id="phone">${phone}</div>`)
        url = response.businesses[i].url
        $("#results").append(`<link href=${url} id="url">${name}</link>`)
        image = response.businesses[i].image_url
        $("#results").append(`<img src=${image} id="image">`)
        
        // $("#results").append(newCard);
        // $(".results").append(nameResult);
    }


})
})