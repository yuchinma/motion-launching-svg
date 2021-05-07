import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export let windTL = gsap.timeline();

gsap.set("#tree, #grass", {transformOrigin: "left bottom"});
gsap.set("#coconut-mid", {transformOrigin: "center top"});

// backInTL.to("#whole-spaceship", {duration: 1, motionPath: {path: "#flyInPath", align:"#flyInPath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power4.out", scale: 1})

windTL.to("#tree, #grass", {duration: .5, skewX: -5})
        .to("#tree, #grass", {duration: .5, skewX: 0, yoyo: true, repeat: 2})
        .to("#coconut-mid", {duration: .15, rotate: 15})
        .to("#coconut-mid", {duration: .15, rotate: 0, yoyo: true, repeat: 4})
        .to("#coconut-mid", {duration: .2, y: 1030})

        // .to("#tree", {duration: .5, rotate: 5})
        // .to("#tree", {duration: .5, rotate: 0, yoyo: true, repeat: 2})
        // .to("#grass", .5, {duration: .5, skewX: -10})
        // .to("#grass", .5, {duration: .5, skewX: 0, yoyo: true, repeat: 2})

        // .to("#grass", {duration: .75, rotate: 5})
        // .to("#grass", {duration: .75, rotate: 0, yoyo: true, repeat: 2})