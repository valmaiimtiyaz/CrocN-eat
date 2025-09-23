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

// Fungsi untuk scroll smooth ke products
      function scrollToProducts() {
        document.getElementById('products').scrollIntoView({
          behavior: 'smooth'
        });
      }

      // Smooth scroll untuk semua link navbar
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // 80px untuk navbar height
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });

      // Mobile menu toggle (jika diperlukan)
      document.getElementById('menu-toggle')?.addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
      });

//supaya orderbutton direct ke instagram
function goToInstagram() {
  window.open("https://www.instagram.com/crocn_eat/", "_blank");
}

