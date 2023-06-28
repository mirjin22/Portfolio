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

let pre = document.querySelector(".project-envent li");
