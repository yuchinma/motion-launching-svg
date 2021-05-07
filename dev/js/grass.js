import { gsap } from "gsap";

export let grassTL = gsap.timeline();

gsap.set("#grass", {scale: 1.3, x: "-=265", y: "-=50"});

grassTL.from("#grass-light-1, #grass-light-2, #grass-light-3", {duration: .5, alpha: 0, y: "+=50", ease: "back"})
        .from("#grass-dark-1, #grass-dark-2, #grass-dark-3", {duration: .5, alpha: 0, y: "+=50", ease: "back"});