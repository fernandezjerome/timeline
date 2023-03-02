const sections = gsap.utils.toArray(".timeline__solo");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".timeline",
        pin: true,
        start: "0",
        scrub: 1,
        end: "+=3000",
        snap: 1 / (sections.length - 1),
        markers: true,
    },
});

console.log(1 / (sections.length - 1));
