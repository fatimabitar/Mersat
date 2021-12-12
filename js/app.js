//Hover EFFECT
new hoverEffect({
  parent: document.querySelector(".img-holder"),
  intensity: 0.1,
  image1:
  "https://res.cloudinary.com/du9veyxbv/image/upload/v1639293699/anchor-1_hf3hjx.png",
  image2:
    "https://res.cloudinary.com/du9veyxbv/image/upload/v1639293726/anchor_unaitc.png",
  displacementImage:
    "https://res.cloudinary.com/du9veyxbv/image/upload/v1639294332/8_lug9kb.jpg",
  imagesRatio: 300 / 280,
});
// GSAP

//  Preloader
TweenMax.to(".first", 1, {
  delay: 0.2,
  top: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".second", 1, {
  delay: 0.5,
  top: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".third", 1, {
  delay: 0.7,
  top: "-100%",
  ease: Expo.easeInOut,
});

gsap.from(".title", 1, {
  y: "-500",
  ease: Expo.easeInOut,
  delay: 1,
});
gsap.from(".caption", 1, {
  y: "-500",
  ease: Expo.easeInOut,
  delay: 1.1,
});
gsap.from(".hero .text", 1, {
  y: "-550",
  ease: Expo.easeInOut,
  delay: 1.2,
});
gsap.from(".subtitle", 1, {
  x: "-500",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 1.5,
});
gsap.from(".links", 1, {
  x: "-500",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 1.5,
});
gsap.from(".anchor-container", 1.2, {
  y: "-1000",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 1.7,
});
gsap.from(".down-btn", 1.2, {
  scale: 0,
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 1.8,
});

//Intro Animation
gsap.from(".col-1 , .col-3", 2, {
  scrollTrigger: ".intro-content",
  y: 800,
  ease: Power1.easeInOut,
});

gsap.from(".col-2 , .col-4", 2, {
  scrollTrigger: ".intro-content",
  y: -800,
  ease: Power1.easeInOut,
});
gsap.from(".intro-content", 1.2, {
  scrollTrigger: ".intro-content",
  x: -500,
  ease: Power1.easeInOut,
  delay: 1.1,
});
gsap.from(".intro-marks", 1.2, {
  scrollTrigger: ".intro-content",
  x: 500,
  ease: Power1.easeInOut,
  delay: 0.9,
});

const down = document.querySelector(".down-btn");
down.addEventListener("click", () => {
  document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
});
