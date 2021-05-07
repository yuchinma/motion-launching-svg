import { gsap } from "gsap";

export let ufoAppearsTL = gsap.timeline();

gsap.set("#light-right, #light-middle, #light-left, #eye", {transformOrigin: "center"});
gsap.set("#alien, #ufo-controls, #smile", {transformOrigin: "center bottom"});
gsap.set("#ufo-light", {transformOrigin: "center top"});
gsap.set("#flash-1, #flash-2, #flash-3", {transformOrigin: "center top"});

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
//ufo floating in air
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls", {duration: .75, y: "-=10", ease: "none"})
        .to("#ufo-top, #ufo-body, #ufo-bottom, #ufo-reflection, #ufo-yellow-lights, #ufo-controls", {duration: .75, y: "+=10", yoyo: true, repeat: 4, ease: "none"})
//flashes, wheels come down
        .from("#flash-1", {duration: .15, alpha: 0, scale: 1}, "-=.5")
        .to("#flash-1", {duration: .15, scale: 1.2})
        .to("#flash-1", {duration: .15, scale: 1})
        .from("#flash-3", {duration: .15, alpha: 0, scale: 1}, "-=.2")
        .to("#flash-3", {duration: .15, scale: 1.2})
        .to("#flash-3", {duration: .15, scale: 1})
        .from("#flash-2", {duration: .15, alpha: 0, scale: 1}, "-=.5")
        .to("#flash-2", {duration: .15, scale: 1.5})
        .to("#flash-2", {duration: .15, scale: 1})
        .from("#ufo-wheels", {duration: 1, alpha: 0, y: "-=100"}, "-=1.2")
//alien appear, light out
        .from("#alien", {duration: .2, alpha: 0, scale: 20}, "+=.5")
        .to("#alien", {duration: .2, scale: 1.3})
        .to("#alien", {duration: .2, scale: 1})
        .to("#ufo-controls", {duration: .2, scaleX: 1.2, scaleY: 1.5}, "+=.5")
        .to("#ufo-controls", {duration: .2, scaleX: 1, scaleY: 1})
        .from("#ufo-light", {duration: 1, alpha: 0})