import { gsap } from "gsap";

export let sunsetTL = gsap.timeline();

gsap.set("#sunset",{transformOrigin:"center bottom"});

sunsetTL.from("#sunset", {duration: .5, scale: 7});