import { gsap } from "gsap";

export let intoSpaceTL = gsap.timeline();

gsap.set("#planet",{transformOrigin:"center center"});

intoSpaceTL.to("#whole-spaceship", {duration: 1, y: "+=350"}, "+=.5")
        // .to("#whole-spaceship", {duration: 8, motionPath: {path: "#spacePath", align:"#spacePath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power4.out", scale: 1})
        .to("#whole-spaceship", {duration: 3, motionPath: {path: "#spacePath1", align:"#spacePath1", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power4.out", scale: 1})
        .from("#planet", {duration: .5, alpha: 0, scale: 1}, "-=2")
        .to("#planet", {duration: .2, rotation: 360}, "-=2")
        .fromTo("#planet", {scale: 1, rotation: 0}, {duration: 1, scale: 10, rotation: 365, x: 500, y: 1300}, "-=2")
        .to("#whole-spaceship-new", {duration: 3, motionPath: {path: "#spacePath2", align:"#spacePath2", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power4.out", scale: 1})