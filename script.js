const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const hiddenElements = document.querySelectorAll(".card, .pricing-card, .about-box, .contact-box");

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
