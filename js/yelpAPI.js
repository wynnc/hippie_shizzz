
var zipCode = "";
var category = "";
var radius = "";
var btnCounter = 0;
var offsetVal = 3;

$("#yelpAPI").on("click", function () {
    btnCounter++;
    
    $("#results-header").show();
    $("#results-container").show();
    $("#results").show().empty();

    zipCode = $(".zipcode").val()
    radius = $("#yelpRadii").find("option:selected").attr("data-value");
    radius = parseInt(radius);
  
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

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + zipCode + "&categories=" + category + "&limit=3";

    if (radius == 5 || radius == 10 || radius == 25) {
        radius = parseInt((radius * 1609.344));
        
        queryURL = queryURL + "&radius=" + radius;
        
    }

    if (btnCounter > 1){
        queryURL = queryURL + "&offset=" + offsetVal;
        offsetVal = offsetVal + 3;
        
    }

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

        // console.log(response);
        
        $("#results").append($("<div>").addClass("row").attr("id", "yelpAPI-cards"));
        for (var i = 0; i < 3; i++) {
            var name = response.businesses[i].name;
            var image = response.businesses[i].image_url;
            var url = response.businesses[i].url;
            let address = response.businesses[i].location.display_address;
            let address1 = address[0];
            let address2 = address[1];
            
            var phone = response.businesses[i].display_phone;
            

            let cardCol = $("<div>").addClass("col s12 m4")
            let newCard = $("<div>").addClass("card meetup-card")
            let cardImgDiv = $("<div>").addClass("card-image")
            let cardImg = $(`<img src=${image} id="image">`)
            let titleHeader = $("<span>").addClass("card-title").text(`${name}`)
            
            cardImgDiv.append(cardImg)
            cardImgDiv.append(titleHeader)
            
            newCard.append(cardImgDiv)
            let cardContentDiv = $("<div>").addClass("card-content")
            let addressP = $("<p>").text(`${address1}`)
            let address2P = $("<p>").text(`${address2}`)
            let phoneP = $("<p>").text(`${phone}`)

            // cardContentDiv.append(titleHeader)
            cardContentDiv.append(addressP)
            cardContentDiv.append(address2P)
            cardContentDiv.append(phoneP)
            
            newCard.append(cardContentDiv)
            let cardAction = $("<div>").addClass("card-action")
            let link = $("<a>").attr("href", `${url}`).text("Visit their site")
            cardAction.append(link)
            newCard.append(cardAction)
            cardCol.append(newCard)

            $("#results").append(cardCol);

        }


    })
})

