$("#meetup-api").on("click", function() {
    var fitnessType = $("#fitnessTypeMeetUp").val();
    var zip = $("#zipcode").val();
    var radius = $("#meetUpRadius").find("option:selected").attr("data-value");
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?zip=" + zip + "&radius=" + radius + "&text=" + fitnessType + "&page=3&fields=featured_photo&key=47617177566fa7974787e43785e5a74";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var events = response.events;
        console.log(events);
        $("#results").append($("<div>").addClass("row").attr("id", "meetup-cards"));
        var col = $("<div>").addClass("col s12 m7");
        var card = $("<div>").addClass("card");
        var cardImg = $("<div>").addClass("card-image");
        var img = $("<img>");
        var cardTitle = $("<span>").addClass("card-title");
        for (var i = 0; i < events.length; i++) {
            var name = events[i].name;
            var picture = events[i].featured_photo.highres_link;
            var description = events[i].description;
            var link = events[i].link;
            var date = events[i].local_date;
            var time = events[i].local_time;
            // put the picture into the img
            img.attr("src", picture);
            cardImg.append(img, cardTitle.text(name));
            $("#meetup-cards").append(cardImg);
            console.log(1);
        }
    })
});