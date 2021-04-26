import { gsap } from "gsap";

export let treeTL = gsap.timeline();

treeTL.from("#tree", {duration: .5, alpha: 0, y: "+=50", ease: "back"});