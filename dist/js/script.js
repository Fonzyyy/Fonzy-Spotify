const burgerBtn = document.querySelector(".burger-button");
const headerNav = document.querySelector(".header-nav");
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open")
    headerNav.classList.toggle("open")
})

const question = document.querySelectorAll(".question");

question.forEach((q) => {
    q.addEventListener("click", () => {
      q.nextElementSibling.classList.toggle("open");
      q.querySelector(".chevron").classList.toggle("open");
    });
  });