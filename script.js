window.onload = function () {
    AFRAME.registerComponent("videohandler", {
      init: function () {
        var marker = this.el;
  
        this.vid = document.querySelector("#vid1");
  
        marker.addEventListener(
          "markerFound",
          function () {
            this.vid.play();
            $('body').on('click touchstart', function () {
                const videoElement = document.getElementById('vid1');
                if (videoElement.playing) {
                    // video is already playing so do nothing
                }
                else {
                    // video is not playing
                    // so play video now
                    videoElement.play();
                }
            });
          }.bind(this)
        );
  
        marker.addEventListener(
          "markerLost",
          function () {
            this.vid.pause();
            this.vid.currentTime = 0;
          }.bind(this)
        );
      },
    });
  };
 
  