$("#meetup-api").on("click", function () {
    $("#results").show().empty();
    var fitnessType = $("#fitnessTypeMeetUp").val();
    var zip = $("#meetup-api-zipcode").val();
    var radius = $("#meetUpRadius").find("option:selected").attr("data-value");
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?zip=" + zip + "&radius=" + radius + "&text=" + fitnessType + "&page=3&fields=featured_photo,venue&key=47617177566fa7974787e43785e5a74";
    console.log(fitnessType);
    console.log(zip);
    console.log(radius);
    if (fitnessType === "null" || zip === "" || radius === "undefined") {
        return false;
    }

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var events = response.events;
        console.log(events);


        $("#results").append($("<div>").addClass("row").attr("id", "meetup-cards"));
        for (var i = 0; i < events.length; i++) {

            var name = events[i].name;
            var picture;
            var description = events[i].description;
            var link = events[i].link;
            var date = events[i].local_date;
            var time = events[i].local_time;
            var hostedBy = `<p>Hosted by ${events[i].group.name}.</p>`;
            var locationName;
            var address;
            // console.log(description);
            if (events[i].venue) {
                locationName = `<p>Location: ${events[i].venue.name}</p>`;
                address = `<div class="address"><p>${events[i].venue.address_1}</p><p>${events[i].venue.city}, ${events[i].venue.state}</p> <p>${events[i].venue.zip}</p></div>`;
            } else {
                locationName = `<p>Check Link for Location info</p>`;
                address = "";
            }

            if (events[i].featured_photo) {
                picture = events[i].featured_photo.photo_link;
                console.log(picture)
            } else {
                picture = "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/19990550_320504011710462_6233984476058453731_n.jpg?_nc_cat=108&_nc_oc=AQk6F-lqU1i-jBnH3HJQ0sUGPmdg0xOoS4Z-4Q4xlAXCqfX9c9JCI_q0v8_4S_ClMQ4&_nc_ht=scontent-den4-1.xx&oh=1eefd341b4f38431c6f9c5123d5090b7&oe=5D5308FA";
                console.log(picture)
            }

            var col = $("<div>").addClass("col s12 m4");
            var card = $("<div>").addClass("card");
            var cardImg = $("<div>").addClass("card-image");
            var img = $("<img>");
            var cardTitle = $("<span>").addClass("card-title");
            var cardContent = $("<div>").addClass("card-content");
            var linkDiv = $("<div>").addClass("card-action")

            // put the picture into the img
            img.attr("src", picture);
            cardImg.append(img, cardTitle.text(name));
            cardContent.append(hostedBy, locationName, address);

            linkDiv.append($("<a>").attr("href", link).text("Event Info"));
            card.append(cardImg, cardContent, linkDiv);
            col.append(card);
            $("#meetup-cards").append(col)
            console.log(1);
        }

    })
});