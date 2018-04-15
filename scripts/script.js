

$(window).scroll(() => {
  const scrollTopValue = $(window).scrollTop();
  $(".parallax-bg").css("background-position", "center " + scrollTopValue*0.6 + "px");
});