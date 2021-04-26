import { gsap } from "gsap";

export let grassTL = gsap.timeline();

grassTL.from("#grass-light", {duration: .5, alpha: 0, y: "+=50", ease: "back"})
        .from("#grass-dark", {duration: .5, alpha: 0, y: "+=50", ease: "back"});