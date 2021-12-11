//Hover EFFECT
new hoverEffect({
  parent: document.querySelector(".img-holder"),
  intensity: 0.3,
  image1: "../img/anchor2.png",
  image2: "../img/anchor1.png",
  displacementImage: "../img/8.jpg",
  imagesRatio: 300 / 280,
});
// GSAP

//  Preloader
TweenMax.to(".first", 1.5, {
  delay: 0.2,
  top: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".second", 1.5, {
  delay: 0.5,
  top: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".third", 1.5, {
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
  opcity:0,
  ease: Expo.easeInOut,
  delay: 1.5,
});
gsap.from(".links", 1, {
  x: "-500",
  opcity:0,
  ease: Expo.easeInOut,
  delay: 1.5,
});
gsap.from(".anchor-container", 1.2, {
  y: "-1000",
  opcity:0,
  ease: Expo.easeInOut,
  delay: 1.7,
});
gsap.from(".down-btn", 1.2, {
  scale:0,
  opcity:0,
  ease: Expo.easeInOut,
  delay: 1.8,
});
