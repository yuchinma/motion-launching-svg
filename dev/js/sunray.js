import { gsap } from "gsap";

export let sunrayTL = gsap.timeline();

gsap.set("#sunray",{transformOrigin:"center bottom"});

sunrayTL.fromTo("#sunray", {duration: 2, alpha: 0, scale: 0}, {alpha: 100, scale: 1})