const container = document.querySelector(".timeline__cont");
const sections = gsap.utils.toArray(".timeline__cont section");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".timeline__cont",
        pin: true,
        start: "-240px",
        scrub: 1,
        end: "+=3000",
        snap: 1 / (sections.length - 1),
        markers: true,
    },
});

console.log(1 / (sections.length - 1));
