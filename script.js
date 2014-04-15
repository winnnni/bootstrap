/**
 * @author
 */

var moreInfo = {
	
	"cycloneInfo":"This is extra informaiton about the cyclone.",
	"wonderwheelInfo":"This is extra info about the Wonder Wheel.",
	"parachuteInfo":"This is extra info about the parachute.",
	}

//Document ready. When the page laods, set up our navigation
$(document).ready(function() {
	setNav();
});

function setNav(){
	$('.btn-success').on("click", function(e) {
		console.log(e.target.id);
		var myID = e.target.id;
		
		$("#"+myID+"Div").append(moreInfo[myID+"Info"]);
//e.target.id is jQuery
		console.log(e.target.parentNode);
	});
}