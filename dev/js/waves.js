import { gsap } from "gsap";

export let wavesTL = gsap.timeline();

gsap.set("#ocean-light",{transformOrigin:"right top"});
gsap.set("#ocean-dark",{transformOrigin:"right top"});

wavesTL.to("#ocean-light", {duration: .5, scaleX: 1.3, scaleY: 1.5, ease: "power4.out"}, "wave1-1")
        .to("#ocean-dark", {duration: .5, scaleX: 1.3, scaleY: 1.5, ease: "power4.out"}, "wave1-1")
        .to("#ocean-light", {duration: .5, scaleX: 1.1, scaleY: 1.1}, "wave1-2")
        .to("#ocean-dark", {duration: .5, scaleX: 1.1, scaleY: 1.1}, "wave1-2")
        .to("#ocean-light", {duration: .5, scaleX: 1.3, scaleY: 1.5, ease: "power3.out"}, "wave2-1")
        .to("#ocean-dark", {duration: .5, scaleX: 1.3, scaleY: 1.5, ease: "power3.out"}, "wave2-1")
        .to("#ocean-light", {duration: .5, scaleX: 1, scaleY: 1}, "wave2-2")
        .to("#ocean-dark", {duration: .5, scaleX: 1, scaleY: 1}, "wave2-2");