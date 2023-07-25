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
// $().on("mouseleave", function(){
//   $('.bolb').fadeOut();
// });
