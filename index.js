// header-menu
document.querySelector(".header-menu h1").addEventListener("click", (e) => {
  document.querySelector(".ani-top").scrollIntoView({ behavior: "smooth" });
});

document
  .querySelector(".header-menu ul li:nth-child(1)")
  .addEventListener("click", (e) => {
    document
      .querySelector(".skill-right")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".header-menu ul li:nth-child(2)")
  .addEventListener("click", (e) => {
    document
      .querySelector(".project-h1")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".header-menu ul li:nth-child(3)")
  .addEventListener("click", (e) => {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  });

//project

const footer = document.querySelector("footer");
const prjevt = document.querySelector(".project-event li");
const prjaft = document.querySelector(".project .project-event .abc");
$(window).on("scroll", () => {
  if (scrollY > prjevt.offsetTop) {
    $(".project-event .abc").height(`${prjevt.offsetTop + 0}`);
  } else {
    $(".project-event .abc").css({
      backgroundColor: " #29f2ff",
    });
  }
  console.log(prjevt.offsetTop);
});
