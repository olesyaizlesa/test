$(document).ready(function() {

	$(".image").draggable({ containment:".action",
							snap:true,
							snapMode: "outer"
	});
	
	var snapMode = $(".image").draggable( "option", "snapMode" );
	$(".image").draggable( "option", "snapMode", 'outer' );

	$(".test").droppable();

	 
	
});
