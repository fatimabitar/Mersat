//Hover EFFECT
new hoverEffect({
  parent: document.querySelector(".img-holder"),
  intensity: 0.1,
  image1:
    "https://res.cloudinary.com/du9veyxbv/image/upload/v1639321351/silver-anchor_lszmrb.png",
  image2:
    "https://res.cloudinary.com/du9veyxbv/image/upload/v1639321358/wheel_mxu7ki.png",
  displacementImage:
    "https://res.cloudinary.com/du9veyxbv/image/upload/v1639294332/8_lug9kb.jpg",
});
// GSAP

//  Preloader

gsap.to(".first", 1, {
  delay: 0.2,
  top: "-100%",
  ease: Expo.easeInOut,
});
gsap.to(".second", 1, {
  top: "-100%",
  ease: Expo.easeInOut,
  delay:0.4
});
gsap.to(".third", 1, {
  top: "-100%",
  ease: Expo.easeInOut,
  delay:0.6
});

gsap.from(".logo", 1, {
  x: "-550",
  ease: Expo.easeInOut,
  delay: 1,
});
gsap.from(".title", 1, {
  y: "-550",
  ease: Expo.easeInOut,
  delay: 1.1,
});
gsap.from(".caption", 1, {
  y: "-600",
  ease: Expo.easeInOut,
  delay: 1.2,
});
gsap.from(".hero .text", 1, {
  y: "-550",
  ease: Expo.easeInOut,
  delay: 1.3,
});
gsap.from(".subtitle", 1, {
  x: "-750",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 1.6,
});
gsap.from(".links", 1, {
  x: "-500",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 1.7,
});
gsap.from(".anchor-container", 1.2, {
  y: "-1150",
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 1.9,
});
gsap.from(".down-btn", 1.2, {
  scale: 0,
  opcity: 0,
  ease: Expo.easeInOut,
  delay: 1.8,
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
gsap.from(".about-title", 0.8, {
  scrollTrigger: ".title-container",
  x: -500,
  ease: Power1.easeInOut,
  delay: 0.3,
});
gsap.from(".title-container .text", 0.8, {
  scrollTrigger: ".title-container",
  x: -500,
  ease: Power1.easeInOut,
  delay: 0.5,
});
gsap.from(".we-are .title-prev", 0.8, {
  scrollTrigger: ".title-container",
  x: -500,
  ease: Power1.easeInOut,
  delay: 0.6,
});
gsap.from(".we-are .a-title", 0.8, {
  scrollTrigger: ".title-container",
  x: -500,
  ease: Power1.easeInOut,
  delay: 0.7,
});
gsap.from(".we-inner .text", 0.8, {
  scrollTrigger: ".title-container",
  x: -600,
  ease: Power1.easeInOut,
  delay: 0.8,
});
gsap.from(".we-are .we-img", 0.8, {
  scrollTrigger: ".title-container",
  x: 500,
  ease: Power1.easeInOut,
  delay: 0.9,
});

/* Our vision */
gsap.from(".our-vision .title-prev", 0.8, {
  scrollTrigger: ".our-inner",
  x: -500,
  ease: Power1.easeInOut,
  delay: 0.3,
});
gsap.from(".our-vision .a-title", 0.8, {
  scrollTrigger: ".our-inner",
  x: -500,
  ease: Power1.easeInOut,
  delay: 0.4,
});
gsap.from(".our-vision .text", 0.8, {
  scrollTrigger: ".our-inner",
  x: -600,
  ease: Power1.easeInOut,
  delay: 0.5,
});
gsap.from(".our-vision .our-img", 0.8, {
  scrollTrigger: ".our-inner",
  x: 500,
  ease: Power1.easeInOut,
  delay: 0.6,
});
/* Our Goals animation */
gsap.from(".our-goals .title-prev", 0.8, {
  scrollTrigger: ".goal-inner",
  x: -500,
  ease: Power1.easeInOut,
  delay: 0.3,
});
gsap.from(".our-goals .title-next", 0.8, {
  scrollTrigger: ".goal-inner",
  x: 500,
  ease: Power1.easeInOut,
  delay: 0.3,
});
gsap.from(".goal-title", 0.8, {
  scrollTrigger: ".goal-inner",
  y: -500,
  opacity: 0,
  ease: Power1.easeInOut,
  delay: 0.3,
});
gsap.from(".goal-inner .text", 1, {
  scrollTrigger: ".goal-inner .text",
  stagger: 0.2,
  opacity: 0,
  x: -1000,
  ease: Power1.easeInOut,
  delay: 1,
});

/* Footer animation */
gsap.from(".contact-info", 1, {
  scrollTrigger: ".atrr",
  opacity: 0,
  y: -500,
  ease: Power1.easeInOut,
  delay: 0.3,
});
gsap.from(".footer-imgs", 1, {
  scrollTrigger: ".atrr",
  opacity: 0,
  y: 500,
  ease: Power1.easeInOut,
  delay: 0.3,
});

/* Navigation Buttons */
const down = document.querySelector(".down-btn");
down.addEventListener("click", () => {
  document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
});

