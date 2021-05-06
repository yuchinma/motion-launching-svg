import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export let windTL = gsap.timeline();

// gsap.set("#tree", {transformOrigin: "left bottom"});

// backInTL.to("#whole-spaceship", {duration: 1, motionPath: {path: "#flyInPath", align:"#flyInPath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power4.out", scale: 1})

// .to("#tree", {duration: .2, rotate: 15})
// .to("#tree", {duration: .2, scaleX: 1.2, scale: .9})