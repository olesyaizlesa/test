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

  img.data({
    startPositionX: positionX,
    startPositionY: positionY
  //  currentPosition: null,
  //  correctPosition: null
  });
}

function checkCells() {
  var check = true;

  $(".image").each(function() {
    if (($(this).data("startPositionX") == $(this).data("startPositionX")) &&
    ($(this).data("startPositionY") == $(this).data("startPositionY"))) {
      check = false;
     }
  });

  if (check) {
    $(".button").addClass("enabled");
    $(".button").removeClass("disabled");
  } else {
    $(".button").removeClass("enabled");
    $(".button").addClass("disabled");
  }
}

  getCellPosition = function(elem) {
  // Пробел между ячейками
  var offset = 6;
  // Объект для позиции
  var pos = {};

  pos.left = $(".test").position().left + elem.position().left + offset
  pos.top = $(".test").position().top + elem.position().top + offset

  return pos;
}
*/

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
    startPositionY: positionY,
    currentPositionX: positionX,
    currentPositionY: positionY
  });
}



function checkCells() {
  var check = true;
  $(".image").each(function() {
    if (($(this).data("currentPositionX") == $(this).data("startPositionX")) &&
    ($(this).data("currentPositionY") == $(this).data("startPositionY"))) {
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
