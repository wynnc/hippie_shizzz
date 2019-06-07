
$("#youtube-api").on("click", function () {
    var type = "yoga";
    var subtype;
    var difficulty;
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + type + "&key=AIzaSyADIp92u5gv-wI2vDg05Wwwo6DxAXw4Vs8&type=video&maxResults=5&yvideoEmbeddable=true&videoDuration=medium";
    var clickCount = 0;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var currentVideo = response.items[clickCount];
        id = currentVideo.id.videoId;
        var videoHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=0" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
        var title = currentVideo.snippet.title;
        var id;
        var newVideo = $("<button>").addClass("btn-large waves-effect waves-light teal lighten-1").text("New Workout");
        $("#results").html(videoHTML).prepend($("<h5>").text(title)).append(newVideo);
        
    });
});