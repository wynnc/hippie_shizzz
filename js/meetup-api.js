$("#meetup-api").on("click", function () {

    var fitnessType = $("#fitnessTypeMeetUp").val();
    var zip = $("#meetup-api-zipcode").val();
    var radius = $("#meetUpRadius").find("option:selected").attr("data-value");
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?zip=" + zip + "&radius=" + radius + "&text=" + fitnessType + "&page=3&fields=featured_photo,venue&key=47617177566fa7974787e43785e5a74";

    // if any of the fields are not chosen, then do not get meetup info
    if (fitnessType === "null" || zip === "" || radius === "undefined") {
        return false;
    }

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#results").show().empty();

        var events = response.events;
        console.log(events);


        $("#results").append($("<div>").addClass("row").attr("id", "meetup-cards"));
        for (var i = 0; i < events.length; i++) {

            var name = events[i].name;
            var picture;
            var description = events[i].description;
            var link = events[i].link;
            var date = `<p>Date: ${events[i].local_date}</p>`;
            var time = `<p>Time: ${events[i].local_time}</p>`;
            var hostedBy = `<p><i>Hosted by ${events[i].group.name}.</i></p>`;
            var locationName;
            var address;
            // console.log(description);
            if (events[i].venue) {
                locationName = `<p>Location: ${events[i].venue.name}</p>`;
                address = `<div class="address"><p>${events[i].venue.address_1}</p><p>${events[i].venue.city}, ${events[i].venue.state}</p> <p>${events[i].venue.zip}</p></div>`;
            } else {
                locationName = `<p>Check Link for Location Info</p>`;
                address = "";
            }

            if (events[i].featured_photo) {
                picture = events[i].featured_photo.photo_link;
                console.log(picture)
            } else {
                picture = "images/background-moon.jpg";
                console.log(picture)
            }

            var col = $("<div>").addClass("col s12 m4");
            var card = $("<div>").addClass("card meetup-card");
            var cardImg = $("<div>").addClass("card-image");
            var img = $("<img>");
            var cardTitle = $("<span>").addClass("card-title");
            var cardContent = $("<div>").addClass("card-content");
            var linkDiv = $("<div>").addClass("card-action")

            // put the picture into the img
            img.attr("src", picture);
            cardImg.append(img, cardTitle.text(name));
            cardContent.append(hostedBy, date, time, locationName, address);

            linkDiv.append($("<a>").attr("href", link).text("Event Info"));
            card.append(cardImg, cardContent, linkDiv);
            col.append(card);
            $("#meetup-cards").append(col);
        }
    })

});