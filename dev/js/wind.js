import { gsap } from "gsap";

export let windTL = gsap.timeline();

gsap.set("#tree, #grass", {transformOrigin: "left bottom"});
gsap.set("#coconut-mid", {transformOrigin: "center top"});

windTL.to("#tree, #grass", {duration: .5, skewX: -10})
        .to("#tree, #grass", {duration: .5, skewX: 0, yoyo: true, repeat: 2})
        .to("#coconut-mid", {duration: .15, rotate: 15})
        .to("#coconut-mid", {duration: .15, rotate: 0, yoyo: true, repeat: 4})
        .to("#coconut-mid", {duration: .2, y: 1030})