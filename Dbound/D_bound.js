const moving = (e) => {
  $(".blob").css({
    left: e.clientX - 450,
    top: e.clientY - 450,
  });
};
$(window).on("mousemove", () => {
  addEventListener("mousemove", moving);
  $(".bolb").fadein();
  console.log(moving);
});
const header = queryselector(".header");
$(window).on("scroll", () => {
  if (scrollY < 1) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
  console.log(header.offsetTop);
});
