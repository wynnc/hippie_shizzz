var name = "";
var address = "";
var phone = "";
var url = "";
var image = "";
var zipCode = "";
var category = "";
var radius = "";




// var zipCode = $("")

$("#yelpAPIbtn").on("click", function () {
    var str = $(".radius").val();
    // var radius = str.split(" ");
    console.log("this is the radius" + str);


    zipCode = $(".zipcode").val()
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

    for (var i = 0; i < 3; i++) {
        // var newColumn = $("<col-md>")
        name = response.businesses[i].name
        var newCard = $("<div>").addClass("card");
        $(newCard).append(`<div class='card-title' id="name">${name}</div>`)

        image = response.businesses[i].image_url
        var newCardImg = $("<div>").addClass("card-image");
        $(newCardImg).append(`<img src=${image} id="image">`)


        var cardContent = $("<div>").addClass("card-content");
        var newPar = $("<p>")
        newPar.append(response.businesses[i].description);
        cardContent.append(newPar);
        
        address = response.businesses[i].location.display_address
        $(newDiv).append(`<p id="address">${address}</p>`)
        
        
        phone = response.businesses[i].phone
        $(newDiv).append(`<p id="phone">${phone}</p>`)

        url = response.businesses[i].url
        $("#results").append(`<a href=${url} id="url">${name}</a>`)
        $("#results").append(newCard);

        
        // $("#results").append(newCard);
        // $(".results").append(nameResult);
    }


})
})


{/* <div class="card">
<div class="card-image">
<img src="images/sample-1.jpg">
<span class="card-title">Card Title</span>
</div>
<div class="card-content">
<p>I am a very simple card. I am good at containing small bits of information.
I am convenient because I require little markup to use effectively.</p>
</div>
<div class="card-action">
<a href="#">This is a link</a>
</div>
</div> */}