const prjevt = document.querySelector(".project .project-event li");
const header = document.querySelector(".header-menu");

// header-menu 클릭시
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

// header-menu 숨기기
$(window).on("scroll", () => {
  if (scrollY < 1) {
    $(".header-menu").addClass("active");
  } else {
    $(".header-menu").removeClass("active");
  }
  console.log(header.offsetTop);
});

// 이동시 색상 변경
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
const skill = document.querySelector(".skill");
const video = document.querySelector(".text-video");
const h1 = document.querySelector(".project-h1");
const footer = document.querySelector(".footer");

$(window).on("scroll", () => {
  if (scrollY < 300) {
    $(".skill").removeClass("active");
  } else {
    $(".skill").addClass("active");
  }
  console.log(skill.offsetTop);
});
$(window).on("scroll", () => {
  if (scrollY < 2300) {
    $(".text-video").removeClass("active");
  } else {
    $(".text-video").addClass("active");
  }
  console.log(video.offsetTop);
});
$(window).on("scroll", () => {
  if (scrollY < 3750) {
    $(".project-h1").removeClass("active");
  } else {
    $(".project-h1").addClass("active");
  }
  console.log(h1.offsetTop);
});
$(window).on("scroll", () => {
  if (scrollY < 6900) {
    $(".footer").removeClass("active");
  } else {
    $(".footer").addClass("active");
  }
  console.log(footer.offsetTop);
});
