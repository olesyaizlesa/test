$(document).ready(function() {});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    function setPosition(img) {
      var positionX = getRandomInt(477, 820);
      var positionY = getRandomInt(0, 340);

    img.css({
      "top": positionY,
      "left": positionX
    });
  }