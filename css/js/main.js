document.addEventListener("DOMContentLoaded", function () {
  var navBtn = document.querySelector(".nav-button");
  var mobileNav = document.querySelector(".mobile-nav");
  var body = document.body;

  if (!navBtn || !mobileNav) return;

  function toggleMobileNav() {
    var isNoScroll = body.classList.toggle("no-scroll");
    navBtn.classList.toggle("nav-button-close");
    var isActive = mobileNav.classList.toggle("mobile-nav-active");
    navBtn.setAttribute("aria-expanded", isActive ? "true" : "false");
  }

  navBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMobileNav();
  });

  window.addEventListener("click", function () {
    if (body.classList.contains("no-scroll")) {
      toggleMobileNav();
    }
  });

  mobileNav.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (body.classList.contains("no-scroll")) {
        toggleMobileNav();
      }
    });
  });
});
