const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");

  // Прелоадер исчезает через 2 секунды
  const loadingDuration = 2000;
  if (loading) {
    setTimeout(() => {
      loading.classList.add("loading-none");
    }, loadingDuration);
  }
});
