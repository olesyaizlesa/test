$(document).ready(function() {

	$(".test-inner").droppable( { tolerance: "fit"
/*	out: function() { $(this).droppable("enable"); },
	drop: function() { $(this).droppable("enable"); }*/
	});

	$(".image").draggable( { containment:".action",	snap: ".test-inner",
	snapMode: "inner", stack: ".image", //revert: "invalid",
	start: function() { console.log("start"); },
	drag: function(event, ui) { console.log("drag"); },
	stop: function(event, ui) { console.log("stop"); },
});

});
