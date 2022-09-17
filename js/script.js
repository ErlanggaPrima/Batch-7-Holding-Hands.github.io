
$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 86){
		  $("#banner").addClass("shrink");
		}
		else
		{
			$("#banner").removeClass("shrink");
		}
});

$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 86) {
          $('.nav-link').css('color', '#fff');
          // $('#banner').css('color', '#000');
      } else {
          $('.nav-link').css('color', '#fff');
          // $('#banner').css('color', '#000');

      }
  });
});

$(window).scroll(function() {
  var image = document.getElementById("navbarImg");
  if (document.documentElement.scrollTop > 86)
      image.src =
      "/assets/condfe-purple.png";
  else
      image.src =
      "/assets/condfe-purple.png";
})
