import { gsap } from "gsap";

export let ufoAppearsTL = gsap.timeline();

gsap.set("#light-right, #light-middle, #light-left", {transformOrigin: "center"});
gsap.set("#alien", {transformOrigin: "center bottom"})

//ufo body appear
ufoAppearsTL.from("#ufo-top, #ufo-body, #ufo-bottom", {duration: .5, alpha: 0, y: "+=50", ease: "back"})
//yellow lights appear
        .from("#light-right", {duration: .5, alpha: 0, scale: 1}, "a1")
        .to("#light-right", {duration: .15, scale: 1.3}, "s1")
        .to("#light-right", {duration: .15, scale: 1}, "s2")
        .from("#light-middle", {duration: .5, alpha: 0, scale: 1}, "a1")
        .to("#light-middle", {duration: .15, scale: 1.3}, "s1")
        .to("#light-middle", {duration: .15, scale: 1}, "s2")
        .from("#light-left", {duration: .5, alpha: 0, scale: 1}, "a1")
        .to("#light-left", {duration: .15, scale: 1.3}, "s1")
        .to("#light-left", {duration: .15, scale: 1}, "s2")
//reflection appear
        .fromTo("#ufo-reflection", {alpha: 0, scale: .5}, {duration: .3, alpha: 1, scale: 1})
//control handles appear
        .from("#ufo-controls", {duration: .5, alpha: 0, y: "+=50", ease: "back"})
//ufo floating in air, wheels come down
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls", {duration: 1, y: "-=10", ease: "none"})
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls", {duration: 1, y: "+=10", yoyo: true, repeat: 6, ease: "none"})
        .from("#ufo-wheels", {duration: 1, alpha: 0, y: "-=50"}, "-=1")
//alien appear
        .from("#alien", {duration: .2, alpha: 0, scale: 20})
        .to("#alien", {duration: .15, scale: 1.3})
        .to("#alien", {duration: .15, scale: 1})