const box2 = document.querySelector(".desigenr-wrapper1 > .box2");
box2 = 1;

const moving = (e) => {
  $(".blob").css({
    left: e.clientX - 60,
    top: e.clientY - 55,
  });
};
$(window).on("mousemove", () => {});
