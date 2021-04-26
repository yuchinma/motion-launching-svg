import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();

// gsap.set("#clouds g",{transformOrigin: right +50});

fadeInTL.from("#background-fill",{duration: 3, scale:5, alpha: 0})
        .from("#clouds g",{duration: .5, alpha: 0, stagger: .25}, "-=2")
        .to("#cloud-1", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-2", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-3", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-4", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-1", {duration: 1, x: "+=60"}, "moveR")
        .to("#cloud-2", {duration: 1, x: "+=60"}, "moveR")
        .to("#cloud-3", {duration: 1, x: "+=60"}, "moveR")
        .to("#cloud-4", {duration: 1, x: "+=60"}, "moveR");