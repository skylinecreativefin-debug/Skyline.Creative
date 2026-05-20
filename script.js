const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* ================= SCROLL ANIMATION ================= */

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

/* ================= HEADER SCROLL ================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else{
    header.classList.remove("scrolled");
  }

});

/* ================= AJANVARAUS ================= */

const datePicker = document.getElementById("datePicker");
const timeSelect = document.getElementById("timeSelect");

if(datePicker){

  datePicker.addEventListener("change", () => {

    const selectedDate = new Date(datePicker.value);

    const day = selectedDate.getDay();

    timeSelect.innerHTML = "";

    let times = [];

    /* MAANANTAI & PERJANTAI EI VARATTAVISSA */

    if(day === 1 || day === 5){

      const option = document.createElement("option");

      option.textContent = "Ei varattavissa";
      option.value = "";

      timeSelect.appendChild(option);

      return;
    }

    /* TIISTAI TORSTAI */

    if(day === 2 || day === 3 || day === 4){

      for(let hour = 17; hour <= 19; hour++){

        times.push(`${hour}:00`);
        times.push(`${hour}:30`);

      }

      times.push("20:00");
    }

    /* VIIKONLOPPU */

    if(day === 0 || day === 6){

      for(let hour = 15; hour <= 19; hour++){

        times.push(`${hour}:00`);
        times.push(`${hour}:30`);

      }

      times.push("20:00");
    }

    times.forEach((time) => {

      const option = document.createElement("option");

      option.value = time;
      option.textContent = time;

      timeSelect.appendChild(option);

    });

  });

}
