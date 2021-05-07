import { gsap } from "gsap";

export let grassTL = gsap.timeline();

gsap.set("#grass", {scale: 1.3, x: "-=270", y: "-=50"});

grassTL.from("#grass-light", {duration: .5, alpha: 0, y: "+=50", ease: "back"})
        .from("#grass-dark", {duration: .5, alpha: 0, y: "+=50", ease: "back"});