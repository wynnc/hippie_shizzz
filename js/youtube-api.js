// an array of the items in the ajax call, so we don't have to run it every time the user loads a new video
var videoList;
// keep track of how many times a new video is loaded through the clicks
var videoCount = 0;
//  the current video in the list, based on how many the user has loaded
var currentVideo;
var id;
var title;
var channelTitle;
var videoContainer = $("<div>").addClass("video-container");

function generateVideo() {
    console.log(videoList);
    currentVideo = videoList[videoCount];
    id = currentVideo.id.videoId;
    channelTitle = currentVideo.snippet.channelTitle;
    var videoHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=0" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
    title = currentVideo.snippet.title;
    var titleText = $("<h5>").text(title);
    var channelText = $("<p>").text("Provided by: " + channelTitle);
    var newVideo = $("<button>").addClass("btn-large waves-effect waves-light teal lighten-1").attr("id", "new-video").text("New Workout");
    // put into the results div
    $("#results").append(videoContainer).append(titleText, channelText, newVideo);
    $(".video-container").html(videoHTML);
    videoCount++;

}


$("#youtube-api").on("click", function () {
    $("#results").empty().show();
    var type = $(".fitness-type").val();
    var subtype = $(".subFitness").val();
    var difficulty = $(".difficulty").val();
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=workout," + type + "," + subtype + "," + difficulty + "&key=AIzaSyADIp92u5gv-wI2vDg05Wwwo6DxAXw4Vs8&type=video&maxResults=5&yvideoEmbeddable=true&videoDuration=medium";

    console.log(type);
    console.log(subtype);
    console.log(difficulty);

    if (type === null || subtype === null || difficulty === null) {
        return false;
    }


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        videoList = response.items;
        generateVideo();
    });
});

$("#results").on("click", "#new-video", function () {
    $("#results").empty();
    if (videoCount === 5) {
        var doItVideo = '<iframe width="640" height="360" src="https://www.youtube.com/embed/ZXsQAXx_ao0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var doItText = $("<p>").text("You got this! Just do one of the provided workout videos!!");
        var doItButton = $("<button>").addClass("btn-large waves-effect waves-light teal lighten-1").attr("id", "new-video").text("Let's Do This!");
        $("#results").append(videoContainer).append(doItText, doItButton);
        $(".video-container").html(doItVideo);
        // start displaying the videos again from the beginning
        videoCount = 0;
    } else {
        generateVideo();
    }
});