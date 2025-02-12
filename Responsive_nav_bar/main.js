const hmWrapper = document.querySelector(".hmWrapper");
const navWrapper = document.querySelector(".nav-Wrapper");
const searchWrapper = document.querySelector(".search-Wrapper");

hmWrapper.addEventListener("click", (e) => {
  e.target.firstElementChild.classList.toggle("active");

  setTimeout(() => {
    searchWrapper.classList.toggle("act2");
  }, 700);

  setTimeout(() => {
    navWrapper.classList.toggle("act1");
  }, 850);
});
