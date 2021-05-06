import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export let lifeOffTL = gsap.timeline();

lifeOffTL.to("#smile", {duration: .75, scale: 1.2}, "smile")
        .to("#eye", {duration: .75, scale: 1.1}, "smile")
        .to("#smile, #eye", {duration: .75, scale: 1})

        .to("#ufo-controls", {duration: .2, scaleX: 1.2, scaleY: 1.5})
        .to("#ufo-controls", {duration: .2, scaleX: 1, scaleY: 1})
        .to("#ufo-light", {duration: 1, alpha: 0})

        .to("#flash-2", {duration: .15, scale: 1.5}, "-=.3")
        .to("#flash-2", {duration: .15, scale: 1})
        .to("#flash-2", {duration: .15, alpha: 0})
        .to("#flash-1", {duration: .15, scale: 1.2}, "-=.15")
        .to("#flash-1", {duration: .15, scale: 1})
        .to("#flash-1", {duration: .15, alpha: 0})
        .to("#flash-3", {duration: .15, scale: 1.2}, "-=.15")
        .to("#flash-3", {duration: .15, scale: 1})
        .to("#flash-3", {duration: .15, alpha: 0})

        .to("#ufo-wheels", {duration: 1, alpha: 0, y: "-=100"}, "+=.5")

        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls, #alien", {duration: .75, y: "-=10", ease: "none"}, "-=.5")
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls, #alien", {duration: .75, y: "+=10", yoyo: true, repeat: 4, ease: "none"})

        .to("#whole-spaceship", {duration: 8, motionPath: {path: "#flyOutPath", align:"#flyOutPath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power2.in", scale: 1})