document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    // toggle menu
    toggle.onclick = function () {
      menu.classList.toggle("show");
    };
    // auto-close kalau klik link di menu
    const links = menu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        menu.classList.remove("show");
      });
    });
  }
});
