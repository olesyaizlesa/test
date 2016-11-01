$(document).ready(function() {

	var img;
	var mas = [];
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			var id = "#t" + i + "_" + j;
			mas.push($(id));
			}
		}

  for (var i = 0; i < 9; i++) {
		setPosition(mas[i]);
	}

	$(".image").draggable( { containment:".action",	snap: ".test-inner",
	snapMode: "inner", stack: ".image",
	start: function() { console.log("start"); },
	drag: function(event, ui) { console.log("drag"); },
	stop: function(event, ui) {
		img = $(this);
		img.data( {
			currentPositionX: ui.position.left,
			currentPositionY: ui.position.top
		});

	var new_pos;
	for (var i = 0; i < 9; i++) {
		if (i != img.index()) {
			if ((mas[i].data("currentPositionX") == img.data("currentPositionX")) &&
					(mas[i].data("currentPositionY") == img.data("currentPositionY"))) {
						$(this).animate( { left: img.data("startPositionX"),
						top: img.data("startPositionY")}, 500, function() {
						});
					}
				}
			}
		},
	});
});
