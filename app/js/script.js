$(document).ready(function() {

	var masImg = [];
	for (var i = 0; i < 3; i++) {
		masImg[i] = [];
		for (var j = 0; j < 3; j++) {
			var id = "#t" + i + "_" + j;
			masImg[i][j] = ($(id));
		}
	}
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			setPosition(masImg[i][j]);
		}
	}

	var masCells = [];
	for (var i = 0; i < 3; i++) {
		masCells[i] = [];
		for (var j = 0; j < 3; j++) {
			var id = "#ti" + i + "_" + j;
			masCells[i][j] = ($(id));
		}
	}

	$(".test-inner").droppable({ tolerance: "fit"});
	$(".game").droppable({});

	$(".image").draggable( { containment:".action",	snap: ".test-inner",
	snapMode: "inner", stack: ".image", revert: "invalid",
	start: function(event, ui) { console.log("start"); },
	drag: function(event, ui) { console.log("drag"); },
	stop: function(event, ui) {

		img = $(this);

		img.data({
			currentPositionX: ui.position.left,
			currentPositionY: ui.position.top });

			$(".button").on("click", function () {
				console.log("click");
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						if ((i != img.index("i")) || (j != img.index("j"))) {

					/*		if  (($(this).data("currentPositionX") == img.data("startPositionX")) &&
									($(this).data("currentPositionY") == img.data("startPositionY"))) {

										img.data({
											currentPositionX: img.data("startPositionX"),
											currentPositionY: img.data("startPositionY")
										});*/

										$(".image").animate( { left: img.data("startPositionX"),
										top: img.data("startPositionY")}, 500, function() {
										});

										img.data({
											currentPositionX: img.data("startPositionX"),
											currentPositionY: img.data("startPositionY")
										});


								//	}
								}
							}
						}
					});
			checkCells();
		},
	});

});
