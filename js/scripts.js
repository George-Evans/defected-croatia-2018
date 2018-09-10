$(document).ready(function() {

	if($(window).width() >= 768) {

		// STAGE GRID FADE

		$(".stage").mouseenter(function() {
		  var desc = $(".stage-desc", this);
		  var title = $(".stage-name", this);
		  $("img", this).stop().fadeTo(300, 0.1);
		  title.stop().fadeOut(200, "swing", function() {
		    desc.stop().fadeIn(100, "swing");
		  });
		}).mouseleave(function() {
		  var desc = $(".stage-desc", this);
		  var title = $(".stage-name", this);
		  $("img", this).stop().fadeTo(300, 0.8);
		  desc.stop().fadeOut(200, "swing", function() {
		    title.stop().fadeIn(100, "swing");
		  });
		});	


  }

  // HIDE MOBILE TICKET BUTTON
	$(window).scroll(function() {
		if($(window).scrollTop() > 2000) {
			$("#mob-tickets").addClass("force-hide");
		} else {
			$("#mob-tickets").removeClass("force-hide");
		}
	});


});


