$("#meetup-api").on("click", function() {
    var fitnessType = "hikes";
    var zip = 80122;
    var radius = 5;
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?zip=" + zip + "&radius=" + radius + "&text=" + fitnessType + "&page=3&fields=featured_photo&key=47617177566fa7974787e43785e5a74";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var events = response.events;
        console.log(events);
        for (var i = 0; i < events.length; i++) {
            var name = events[i].name;
            var picture = events[i].featured_photo.highres_link;
            var description = events[i].description;
            var link = events[i].link;
            var date = events[i].local_date;
            var time = events[i].local_time;
        }
    })
});