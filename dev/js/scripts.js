import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { wavesTL } from "./waves"
import { sunsetTL } from "./sunset"
import { fadeInTL } from "./fadeIn"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(sunsetTL)
        .add(wavesTL)
        .add(fadeInTL);


// console.log(numberThing);

GSDevTools.create();