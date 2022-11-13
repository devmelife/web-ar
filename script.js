var markerFound = 0;
AFRAME.registerComponent("videohandler", {
  init: function () {
    var elem = document.documentElement;
    var marker = document.querySelector("#marker");
    var Video_0 = document.querySelector("#Video_Asset_0");
    var button = document.querySelector("#mutebutton");
    button.hidden = true;
    Video_0.pause();

    marker.addEventListener("markerFound", function (evt) {
      markerFound = 1;
      button.hidden = false;
      Video_0.muted = false;
      Video_0.play(); 
    });

    marker.addEventListener("markerLost", function (evt) {
      markerFound = 0;
      Video_0.muted = true;
      Video_0.pause();
      Video_0.currentTime = 0;
      button.hidden = true;
    });

    button.addEventListener("click", function (evt) {
      console.log("button clicked");
      if (Video_0.muted == true) {
        button.innerHTML = "Pause";
        Video_0.muted = false;
        Video_0.play();
      } else {
        button.innerHTML = "Play";
        Video_0.muted = true;
        Video_0.pause();
      }
    });
  },
  tick: function (totalTime, deltaTime) {
    var dTime = deltaTime / 1000;
    if (markerFound == 1) {
    }
  },
});