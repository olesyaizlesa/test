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

  img.data({
    startPositionX: positionX,
    startPositionY: positionY
  });
}

function collision(elem, masCells, area) {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if ((Math.abs(elem.position().left - masCells[i][j].position().left) <= area) &&
      (Math.abs(elem.position().top - masCells[i][j].position().top) <= area) &&
      (elem.attr("id") != masCells[i][j].attr("id"))) {
        return masCells[i][j]
      }
    }
  }
  return false
}

function checkCells() {
  var check = true;
  $(".image").each(function() {
    if (($(this).data("currentPositionX") == null) &&
    ($(this).data("currentPositionX") == null)) {
      check = false;
    }
    if (check) {
      $(".button").addClass("enabled");
      $(".button").removeClass("disabled");
    } else {
      $(".button").removeClass("enabled");
      $(".button").addClass("disabled");
    }
  });
}
