gsap.registerPlugin(CSSRulePlugin);
//  Preloader
gsap.to(".first", 1, {
  delay: 0.2,
  top: "-100%",
  ease: Expo.easeInOut,
  delay: 2,
});
gsap.to(".second", 1, {
  top: "-100%",
  ease: Expo.easeInOut,
  delay: 2.4,
});
gsap.to(".third", 1, {
  top: "-100%",
  ease: Expo.easeInOut,
  delay: 2.6,
});

gsap.from(".logo", 1, {
  y: "-550",
  ease: Expo.easeInOut,
  delay: 2.9,
});
gsap.from(".title", 1, {
  y: "-550",
  ease: Expo.easeInOut,
  delay: 3,
});
gsap.from(".caption", 1, {
  y: "-600",
  ease: Expo.easeInOut,
  delay: 3,
});
gsap.from(".hero .text", 1, {
  y: "-550",
  ease: Expo.easeInOut,
  delay: 3.1,
});
gsap.from(".subtitle", 1, {
  x: "-750",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 3.4,
});
gsap.from(".links", 1, {
  x: "-500",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 3.7,
});
gsap.from(".anchor-container", 1.2, {
  y: "-1150",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 3.7,
});

//Intro Animation
gsap.from(".intro-content", 1, {
  scrollTrigger: ".intro-content",
  x: -500,
  ease: Power1.easeInOut,
  delay: 0.2,
});

//About Us animation
gsap.from(".line-1 , .line-2", 0.8, {
  scrollTrigger: ".title-container",
  scale: 0,
  opacity: 0,
  ease: Power1.easeInOut,
  delay: 0.1,
});

gsap.from(".goal-inner .text", 0.5, {
  scrollTrigger: ".goal-inner .text",
  stagger: 0.3,
  opacity: 0,
  y: 30,
  ease: Power1.easeIn,
  delay: 0.5,
});

/* Footer animation */
gsap.from(".contact-info", 1, {
  scrollTrigger: {
    trigger: ".footer",
    start: "-=200",
    end: "-=200",
    // markers:true
  },
  opacity: 0,
  y: -200,
  ease: Power1.easeInOut,
});
gsap.from(".footer-imgs", 1, {
  scrollTrigger: {
    trigger: ".footer",
    start: "-=200",
    end: "-=200",
    // markers:true
  },
  opacity: 0,
  y: 200,
  ease: Power1.easeInOut,
});

/* Navigation Buttons */
const down = document.querySelector(".down-btn");
down.addEventListener("click", () => {
  document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
});

/* Slider */
var colors = ["#3358a7"];

//initially colorize each box and position in a row
gsap.set(".logoSlide", {
  backgroundColor: (i) => colors[i % colors.length],
  x: (i) => i * 300,
});

let box = document.querySelector(".logoSlide");
let boxWidth = box.offsetWidth;
let boxLength = document.querySelectorAll(".logoSlide").length;
let boxesLength = boxWidth * boxLength;

let animation = gsap.to(".logoSlide", {
  paused: true,
  ease: "none",
  x: "+=" + boxesLength,
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % boxesLength),
  },
  repeat: -1,
});

gsap.to(animation, {
  ease: Power1.easinOut,
  progress: "+=" + 0.2 / boxLength,
  repeat: -1,
  repeatRefresh: true,
  repeatDelay: 0.5,
});
