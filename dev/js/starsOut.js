import { gsap } from "gsap";

export let starsOutTL = gsap.timeline();

starsOutTL.from("#stars g",{duration: 3, alpha: 0, stagger: .25})