import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { wavesTL } from "./waves"
import { fadeInTL } from "./fadeIn"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(wavesTL);


// console.log(numberThing);

GSDevTools.create();