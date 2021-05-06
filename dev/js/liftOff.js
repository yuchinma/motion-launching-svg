import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let lifeOffTL = gsap.timeline();

gsap.set("#tree", {transformOrigin: "left bottom"});

//ready to lift off
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

//floating and fly away
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls, #alien", {duration: .75, y: "-=10", ease: "none"}, "-=.5")
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls, #alien", {duration: .75, y: "+=10", yoyo: true, repeat: 4, ease: "none"})
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls, #alien", {duration: .5, y: "+=50"}, "-=.1")

        .to("#whole-spaceship", {duration: .1, motionPath: {path: "#flyOutPath", align:"#flyOutPath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power2.in", scale: 1})

        // .to("#tree", {duration: .2, rotate: 15})
        // .to("#tree", {duration: .2, scaleX: 1.2, scale: .9})

        // MotionPathHelper.create("#whole-spaceship");