// const logo = document.querySelector(".header-logo");
// const header = document.querySelector(".header");
// $(logo).on("click", (e) => {
//   e.target = header.scrollIntoView({ behavior: "smooth" });
// });

document.querySelector(".header-logo").addEventListener("click", (e) => {
  document.querySelector("header").scrollIntoView({ behavior: "smooth" });
});

// const moving = (e) => {
//   $(".blob").css({
//     left: e.clientX - 450,
//     top: e.clientY - 450,
//   });
// };
// $(window).on("mousemove", () => {
//   addEventListener("mousemove", moving);
//   $(".bolb").fadein();
//   console.log(moving);
// });
//
let mouseX = 0;
let mouseY = 0;
let blobX = 0;
let blobY = 0;

const mouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const animationBlob = (e) => {
  const distanceX = mouseX - blobX;
  const distanceY = mouseY - blobY;
  blobX = blobX + distanceX * 0.1;
  blobY = blobY + distanceY * 0.1;
  $(".blob").css({
    left: blobX - 450,
    top: blobY - 450,
  });

  requestAnimationFrame(animationBlob);
};

$(document).on("mousemove", mouseMove);

animationBlob();

// const header = document.querySelector(".header");
// $(window).on("scroll", () => {
//   if (scrollY < 1) {
//     $(".header").removeClass("active");
//   } else if (scrollY < 1) {
//     $(".header").addClass("active");
//   } else if (scrollY < -1) {
//     $(".header").slideDown();
//   } else {
//     $(".header").slideUp();
//   }
//   console.log(header.offsetTop);
// });
// $(window).on("scroll", () => {
//   if (scrollY < 1) {
//     $(".header").slideDown();
//   } else {
//     $(".header").slideUp();
//   }
// });

// addEventListener('scoll', () => { })

// 브라우저를 열면 바로 읽음. 보통은 0
let prevScroll = window.scrollY;
console.log(prevScroll);

$(window).on("scroll", () => {
  // 스크롤시 변수에 저장
  let currentScroll = window.scrollY;
  console.log("currentScroll: ", currentScroll);
  console.log("1 prevScroll: ", prevScroll);

  // 이전 스크롤 값이 크면 true, 스크롤을 올리면 header 보임
  if (prevScroll > currentScroll) {
    $(".header").show();
    $(".header").css({ top: 0 });
  } else {
    // 이후 스크롤 값이 크면 false, 스크롤을 내리면 header 숨김
    $(".header").hide();
    $(".header").css({ top: -100 });
  }

  // prev에 현재 스크롤 값 대입
  prevScroll = currentScroll;
  console.log("2 prevScroll: ", prevScroll);
});
$(window).on("scroll", () => {
  if (scrollY < 1) {
    $(".header").addClass("show");
  } else {
    $(".header").removeClass("show");
  }
});

const container1 = document.querySelector(".designer-container");
const container2 = document.querySelector(".card-container");
const container3 = document.querySelector(".project-container");
const container4 = document.querySelector(".service-container");
const container5 = document.querySelector(".client-container");
const container6 = document.querySelector(".contact-container");

//designer
$(window).on("scroll", () => {
  if (scrollY <= 800) {
    $(".designer-container").addClass("active");
  } else {
    $(".designer-container").removeClass("active");
  }
  console.log(container1.offsetTop);
});
// card
$(window).on("scroll", () => {
  if (scrollY < 1300) {
    $(".card-container").removeClass("active");
  } else {
    $(".card-container").addClass("active");
  }
  console.log(container2.offsetTop);
});
//project
$(window).on("scroll", () => {
  if (scrollY < 3150) {
    $(".project-container").removeClass("active");
  } else {
    $(".project-container").addClass("active");
  }
  console.log(container3.offsetTop);
});
//service
$(window).on("scroll", () => {
  if (scrollY < 4800) {
    $(".service-container").removeClass("active");
  } else {
    $(".service-container").addClass("active");
  }
  console.log(container4.offsetTop);
});
//client
$(window).on("scroll", () => {
  if (scrollY < 6850) {
    $(".client-container").removeClass("active");
  } else {
    $(".client-container").addClass("active");
  }
  console.log(container5.offsetTop);
});
//contact
$(window).on("scroll", () => {
  if (scrollY < 7900) {
    $(".contact-container").removeClass("active");
  } else {
    $(".contact-container").addClass("active");
  }
  console.log(container6.offsetTop);
});
