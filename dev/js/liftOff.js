import { gsap } from "gsap";

export let liftOffTL = gsap.timeline();

// gsap.set("#coconut-mid", {transformOrigin: "center top"});

liftOffTL.to("#whole-spaceship", {duration: .5, y: "+=50"})