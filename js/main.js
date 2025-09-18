$("#gnb .dep1>li").hover(
  function () {
    $(this).children(".dep2_wrap").stop().show();
    $("header").addClass("on");
  },
  function () {
    $("#gnb .dep2_wrap").stop().slideUp();
    $("header").removeClass("on");
  }
);
