window.onload = function () {
    AFRAME.registerComponent("videohandler", {
      init: function () {
        var marker = this.el;
  
        this.vid = document.querySelector("#vid1");
  
        marker.addEventListener(
          "markerFound",
          function () {
            this.vid.play();
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
  