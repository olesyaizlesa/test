$(document).ready(function() {

		$(".test").droppable();
	
		$(".image").draggable({ containment:".action", 
								snap: ".test-inner",
								snapMode: "inner",
								revert: "invalid",
		start: function(){
	    console.log("START");
        },
        drag: function(event, ui){
	    console.log("DRAG");
        },
        stop: function(){
	    console.log("STOP");
        }
		});
	
});
