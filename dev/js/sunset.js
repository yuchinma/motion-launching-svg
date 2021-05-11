import { gsap } from "gsap";

export let sunsetTL = gsap.timeline();

gsap.set("#sunset",{transformOrigin:"center bottom"});

sunsetTL.fromTo("#ending", {alpha: 1}, {duration: 3, alpha: 0, ease: "power3.in"})
        .from("#sunset", {duration: 3, scale: 7, ease: "back"});