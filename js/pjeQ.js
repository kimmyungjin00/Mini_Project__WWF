$(function () {
  // 탭 메뉴
  $(".news_contents > li > a").click(function () {
    // console.log(this);
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
});
