import { gsap } from "gsap";

// gsap.registerPlugin(CustomEase)
// CustomEase.create("waves", "M0,0 C0,0 0.029,0.256 0.159,0.668 0.284,0.952 0.354,1.051 0.519,1.052 0.639,1.052 0.709,1.007 0.747,0.966 0.79,0.918 1,0.7 1,0.7 ")

export let wavesTL = gsap.timeline();

gsap.set("#ocean-light",{transformOrigin:"right top"});
gsap.set("#ocean-dark",{transformOrigin:"right top"});


// zoomTL.from("#sky",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
            // .from("#red-mtn",{duration:5.75, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            // .from(".front-mtns",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            // .from("#trees-5",{duration:5.5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            // .from("#trees-4",{duration:5.25, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            // .from("#trees-3",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            // .from("#trees-2",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            // .from("#trees-1",{duration:4.75, scale:10,ease: "power4.out",y:"+=420"},"zoom")

wavesTL.to("#ocean-light", {duration: .5, scaleX: 1.3, scaleY: 1.5, ease: "power4.out"}, "wave1-1")
        .to("#ocean-dark", {duration: .5, scaleX: 1.3, scaleY: 1.5, ease: "power4.out"}, "wave1-1")
        .to("#ocean-light", {duration: .5, scaleX: 1.1, scaleY: 1.1}, "wave1-2")
        .to("#ocean-dark", {duration: .5, scaleX: 1.1, scaleY: 1.1}, "wave1-2")
        .to("#ocean-light", {duration: .5, scaleX: 1.3, scaleY: 1.5, ease: "power3.out"}, "wave2-1")
        .to("#ocean-dark", {duration: .5, scaleX: 1.3, scaleY: 1.5, ease: "power3.out"}, "wave2-1")
        .to("#ocean-light", {duration: .5, scaleX: 1, scaleY: 1}, "wave2-2")
        .to("#ocean-dark", {duration: .5, scaleX: 1, scaleY: 1}, "wave2-2");