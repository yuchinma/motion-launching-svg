import { gsap } from "gsap";

export let liftOffTL = gsap.timeline();

gsap.set("#sunray",{transformOrigin:"center bottom"});
// gsap.set("#coconut-mid", {transformOrigin: "center top"});

liftOffTL.to("#whole-spaceship", {duration: .5, y: "+=50"})
        .to("#sunray", {duration: 2, alpha: 0, scale: 0, x: "+=75"})