/**
 * @author
 */

var video ="<iframe width='560' height='315' src='//www.youtube.com/embed/o2-RXqU4Lg8' frameborder='0' allowfullscreen></iframe>";

S(document).ready(function() {
	setNAv();
});

function setNav(){
	$(".cyclone").on("click", function() {
		$('#myModal').modal();	
		$('.modal-body').html(video);
	});
	
	$(".close").on("click", function(){
		$('.modal-body').empty();
	});
}