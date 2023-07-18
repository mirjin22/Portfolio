const header = document.querySelector(".header-menu");

// 메뉴 클릭시 이동
document.querySelector(".header-menu h1").addEventListener("click", (e) => {
  document.querySelector(".ani-top").scrollIntoView({ behavior: "smooth" });
});

document
  .querySelector(".header-menu ul li:nth-child(1)")
  .addEventListener("click", (e) => {
    document
      .querySelector(".swot-container")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".header-menu ul li:nth-child(2)")
  .addEventListener("click", (e) => {
    document
      .querySelector(".review-container")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".header-menu ul li:nth-child(3)")
  .addEventListener("click", (e) => {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  });

// 메뉴 숨기기
$(window).on("scroll", () => {
  if (scrollY < 1) {
    $(".header-menu").addClass("active");
  } else {
    $(".header-menu").removeClass("active");
  }
  console.log(header.offsetTop);
});
