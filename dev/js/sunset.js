import { gsap } from "gsap";

export let sunsetTL = gsap.timeline();

gsap.set("#sunset",{transformOrigin:"center bottom"});

sunsetTL.from("#sunset", {duration: 3, scale: 7, ease: "back"});