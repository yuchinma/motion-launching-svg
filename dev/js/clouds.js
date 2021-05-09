import { gsap } from "gsap";

export let cloudsTL = gsap.timeline();

cloudsTL.from("#clouds g",{duration: .5, alpha: 0, stagger: .25})
        .to("#cloud-1", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-2", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-3", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-4", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-5", {duration: 1, x: "-=50"}, "moveL")
        .to("#cloud-1", {duration: 1, x: "+=60"}, "moveR")
        .to("#cloud-2", {duration: 1, x: "+=60"}, "moveR")
        .to("#cloud-3", {duration: 1, x: "+=60"}, "moveR")
        .to("#cloud-4", {duration: 1, x: "+=60"}, "moveR")
        .to("#cloud-5", {duration: 1, x: "+=60"}, "moveR");