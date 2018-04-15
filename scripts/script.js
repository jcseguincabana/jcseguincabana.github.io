

$(window).scroll(() => {
  const scrollTopValue = $(window).scrollTop();
  $(".parallax-bg").css("background-position", "center " + scrollTopValue*0.6 + "px");
});


$(window).scroll(() => {
  const scrollTopValue = $(window).scrollTop();
  if (scrollTopValue > 25) {
    $(".arrow").fadeOut("medium");
  } else {
    $(".arrow").fadeIn("medium");
  }
});