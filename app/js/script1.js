$(document).ready(function() {
  function array() {
    var m = 3, n = 3;
    //  mas[i] = [];
    var mas = [];
    for (var i = 0; i < m; i++) {
    	for (var j = 0; j < n; j++) {
        var id = "#" + i + "_" + j;
        var src = "url(img/"+ i + "_" + j +".png)";
        var positionX = getRandomInt(60, 400) + "px";
        var positionY = getRandomInt(20, 400) + "px";
        mas.push ($(id).css({
          "background": src,
          "top": positionY,
          "left": positionX
        });)
        }
      }
console.log(mas);
  }
});
