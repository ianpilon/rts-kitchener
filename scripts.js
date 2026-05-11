document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".main-nav");
  const burger = nav && nav.querySelector(".hamburger");
  if (!burger) return;
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
});
