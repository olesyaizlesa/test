	$(document).ready(function() {

		$(".test-inner").droppable( { tolerance: "fit",
		out: function() { $(this).droppable("enable"); },
		drop: function() { $(this).droppable("disable"); }
	});

		$(".image").draggable( { containment:".action",	snap: ".test-inner",
		snapMode: "inner", revert: "invalid",
	  stack: ".image",
		start: function() { console.log("start"); },
		drag: function(event, ui) { console.log("drag"); },
		stop: function(event, ui) { console.log("ui.position");	}
		});
	});
