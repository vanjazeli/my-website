// menu

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

let hamburgerState = false;

const hamburgerClose = () => {
  hamburger.classList.remove("is-active");
  menu.classList.remove("menu--open");
  hamburgerState = false;
};

const hamburgerToggle = () => {
  if (hamburgerState === false) {
    hamburger.classList.add("is-active");
    menu.classList.add("menu--open");
    hamburgerState = true;
  } else {
    hamburgerClose();
  }
};

hamburger.addEventListener("click", hamburgerToggle);

const menuContainer = document.querySelector(".container-fixed");

const menuContainerPositioning = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1340) {
    menuContainer.style.right = `${(windowWidth - 1338) / 2}px`;
  } else {
    menuContainer.style.right = "-1px";
  }
};

window.addEventListener("resize", menuContainerPositioning);
window.addEventListener("load", menuContainerPositioning);

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", hamburgerClose);
});

// menu navigation

const homeLink = document.querySelector(".js-home-link");
const aboutLinks = document.querySelectorAll(".js-about-link");
const skillsLinks = document.querySelectorAll(".js-skills-link");
const contactLinks = document.querySelectorAll(".js-contact-link");

const about = document.querySelector(".js-about");
const skills = document.querySelector(".js-skills");

homeLink.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

aboutLinks.forEach((link) => {
  link.addEventListener("click", () => {
    about.scrollIntoView();
  });
});

skillsLinks.forEach((link) => {
  link.addEventListener("click", () => {
    skills.scrollIntoView();
  });
});

contactLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.scrollTo(0, document.body.scrollHeight);
  });
});

// hero

const swiper = new Swiper(".hero__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// footer

const contactCopy = document.querySelector(".contact__copy");

let currentYear = new Date().getFullYear();

contactCopy.innerHTML = `&copy; ${currentYear} All Rights Reserved`;

const instagramLink = document.querySelector(".js-instagram");
const linkedinLink = document.querySelector(".js-linkedin");

instagramLink.addEventListener("click", () => {
  window.open("https://www.instagram.com/valez_97/");
});

linkedinLink.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/vanja-zeli/");
});

// load

const body = document.querySelector("body");

window.addEventListener("load", () => {
  setTimeout(() => (body.style.opacity = 1), 1000);
});

// gsap

gsap.registerPlugin(ScrollTrigger);

gsap.to(".swiper-slide__content", {
  scrollTrigger: {
    trigger: ".hero__swiper",
    start: "top",
    end: "bottom",
    scrub: 0.5,
  },
  y: 60,
  opacity: 0,
  duration: 3,
});

gsap.to(".swiper-slide__img", {
  scrollTrigger: {
    trigger: ".hero__swiper",
    start: "top",
    end: "bottom",
    scrub: 0.5,
  },
  opacity: 0,
  duration: 3,
});

gsap.from(".flex-layout-1", {
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "restart none restart none",
  },
  opacity: 0,
  x: 60,
  duration: 1.5,
});

gsap.from(".banner-1__container", {
  scrollTrigger: {
    trigger: ".banner-1",
    toggleActions: "restart none restart none",
  },
  opacity: 0,
  x: -60,
  duration: 1.5,
});

gsap.from(".skills__container", {
  scrollTrigger: {
    trigger: ".skills",
    toggleActions: "restart none restart none",
  },
  opacity: 0,
  x: 60,
  duration: 1.5,
});

gsap.from(".contact__container", {
  scrollTrigger: {
    trigger: ".contact",
    toggleActions: "restart none restart none",
  },
  opacity: 0,
  x: -60,
  duration: 1.5,
});
