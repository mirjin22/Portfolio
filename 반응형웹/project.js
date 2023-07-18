document
  .querySelector(".header-menu .header-img1")
  .addEventListener("click", (e) => {
    document.querySelector("header").scrollIntoView({ behavior: "smooth" });
  });
$(document).ready(function () {
  $("#nav-icon1").click(function () {
    $(this).toggleClass("open");
  });
});
$("ul")
  .find("a")
  .on("click", (e) => {
    e.preventDefault();
  });
$("div")
  .find("a")
  .on("click", (e) => {
    e.preventDefault();
  });

function myMenu(status) {
  var menu = document.getElementById("menu-container");

  if (status == 1) {
    //메뉴 보이기
    //alert("메뉴 보이기");
    menu.style.display = "block";
  } else {
    //메뉴 감추기
    //alert("메뉴 감추기");
    menu.style.display = "none";
  }
}
