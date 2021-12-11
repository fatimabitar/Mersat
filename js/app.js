//Hover EFFECT
new hoverEffect({
    parent: document.querySelector('.img-holder'),
    intensity: 0.3,
    image1: '../img/anchor2.png',
    image2: '../img/anchor1.png',
    displacementImage: '../img/8.jpg'
});
// GSAP
let tl = gsap.timeline({
  delay: 0.1,
  defaults: {
    duration: 1,
    ease: Power1.easeOut,
  },
  smoothChildTiming: true,
});
tl.from(".logo", { duration: 0.8, y: -500 })
  .from(".anchor-container", { duration: 1, y: -1000 , delay:0.02 })
  .from(".title", { duration: 0.8, delay: 0.01, y: -500 })
  .from(".subtitle", { duration: 0.8, delay: 0.02, y: -600 })
  .from(".caption", { duration: 0.8, delay: 0.02, y: -650 })
  .from(".hero .text", { duration: 0.8, delay: 0.02, y: -650 })
  .from(".link-1", { duration: 0.8, y: 400 }, "-=3")
  .from(".link-2", { duration: 0.8, y: 400 }, "-=2")
  .from(".link-3", { duration: 0.8, y: 400 }, "-=1")
  .from(".down-btn", { duration: 0.8, scale: 0, delay: 0.5 });
