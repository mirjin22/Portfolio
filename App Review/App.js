const header = document.querySelector(".header-menu");

// 메뉴 숨기기
$(window).on("scroll", () => {
  if (scrollY < 1) {
    $(".header-menu").addClass("active");
  } else {
    $(".header-menu").removeClass("active");
  }
  console.log(header.offsetTop);
});
