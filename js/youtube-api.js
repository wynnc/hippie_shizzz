var type;
var subtype;
var difficulty;
var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + type + "&key=AIzaSyADIp92u5gv-wI2vDg05Wwwo6DxAXw4Vs8&type=video&maxResults=5&yvideoEmbeddable=true&videoDuration=medium";
var title;
var id;

$("#youtube-api").on("click", function () {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // pick a random number from the first 5 responses
        var firstVideo = response.items[Math.floor(Math.random() * 5) + 1];
        id = firstVideo.id.videoId;
        var videoHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=0" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
        title = firstVideo.snippet.title;
        $("#results").html(videoHTML).prepend($("<h5>").text(title));
    });
});