
// Parallax background
$(window).scroll(() => {
  const scrollTopValue = $(window).scrollTop();
  $(".parallax-bg").css("background-position", "center " + scrollTopValue*0.6 + "px");
});

// Arrow 
$(window).scroll(() => {
  const scrollTopValue = $(window).scrollTop();
  if (scrollTopValue > 25) {
    $(".arrow").fadeOut("medium");
  } else {
    $(".arrow").fadeIn("medium");
  }
});

// Smooth scrolling for anchors
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 100);
});