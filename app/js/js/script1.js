$(document).ready(function() {

  /*function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    function setPosition(img) {
      var positionX = getRandomInt(477, 820);
      var positionY = getRandomInt(0, 340);

    img.css({
      "top": positionY,
      "left": positionX
    });
  }*/

  var mas = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var id = "#" + i + "_" + j;
      mas.push($(id));
    }
  }

  /*for (var i = 0; i < 9; i++) {
    setPosition(mas[i]);
  }*/
});
