const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* ===================== SCROLL HEADER ===================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});

/* ===================== SCROLL ANIMATIONS ===================== */

const hiddenElements = document.querySelectorAll(
  ".card, .pricing-card, .about-box, .contact-box, .booking-card, .booking-form-box"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});
