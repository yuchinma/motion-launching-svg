import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export let backInTL = gsap.timeline();

// gsap.set("#tree", {transformOrigin: "left bottom"});

backInTL.to("#whole-spaceship", {duration: 1, motionPath: {path: "#flyInPath", align:"#flyInPath", alignOrigin: [0.5, 0.5], autoRotate: 45}, ease: "power4.out", scale: 1})