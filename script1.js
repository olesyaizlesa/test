$(document).ready(function() {  

  var mas = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var id = "#" + i + "_" + j;
      mas.push($(id));
    }
  }

  for (var i = 0; i < 9; i++) {
    setPosition(mas[i]);
  }
})