import { gsap } from "gsap";

export let liftOffTL = gsap.timeline();

gsap.set("#sunray",{transformOrigin:"center bottom"});
// gsap.set("#coconut-mid", {transformOrigin: "center top"});

liftOffTL.to("#whole-spaceship", {duration: .75, y: "-=10", ease: "none"})
        .to("#whole-spaceship", {duration: .75, y: "-=10", yoyo: true, repeat: 5, ease: "none"})
        .to("#sunray", {duration: .75, alpha: 0, scale: 0, x: "+=75"}, "-=1.3")
        .to("#tree", {duration: 3, alpha: 0, y: "+=900", ease: "power3.in"}, "away")
        .to("#grass", {duration: 3, alpha: 0, y: "+=400", ease: "power3.in"}, "away")
        .to("#sand", {duration: 3, alpha: 0, y: "+=700", ease: "power3.in"}, "away")
        .to("#ocean", {duration: 3, alpha: 0, y: "+=700", ease: "power3.in"}, "away")
        .to("#sun", {duration: 3.05, alpha: 0, y: "+=750", ease: "power3.in"}, "away")
        .to("#clouds", {duration: 3, alpha: 0, y: "+=1100", ease: "power3.in"}, "away")
        .to("#whole-spaceship", {duration: 5, scale: .5, y: "-=200", ease: "power3.in"}, "away")
        .from("#space", {duration: 5, alpha: 0, ease: "power3.in"}, "away")

        // .to("#whole-spaceship", {duration: .5, y: "+=50"})