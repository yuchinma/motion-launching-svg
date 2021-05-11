import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flyOutTL = gsap.timeline();

gsap.set("#tree", {transformOrigin: "left bottom"});
gsap.set("#antenna-right, #antenna-left", {transformOrigin: "center bottom"});

//alien smile, ready to lift off
flyOutTL.to("#smile", {duration: .75, scale: 1.2}, "smile")
        .to("#eye", {duration: .75, scale: 1.1}, "smile")
        .to("#antenna-right, #antenna-left", {duration: .75, scale: 1.2}, "smile")
        .to("#smile, #eye, #antenna-right, #antenna-left", {duration: .75, scale: 1})

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

        .to("#ufo-wheels", {duration: 1, alpha: 0, y: "-=100"}, "-=.3")

//floating and fly away
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls, #alien", {duration: .75, y: "-=10", ease: "none"}, "-=.5")
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls, #alien", {duration: .75, y: "+=10", yoyo: true, repeat: 2, ease: "none"})
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls, #alien", {duration: .5, y: "+=50"}, "-=.5")

        .to("#whole-spaceship", {duration: 5, motionPath: {path: "#flyInOut", align:"#flyInOut", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power4.out", scale: 1})

        // MotionPathHelper.create("#whole-spaceship");