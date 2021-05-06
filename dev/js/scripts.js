import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { sunsetTL } from "./sunset"
import { wavesTL } from "./waves"
import { sunrayTL } from "./sunray"
import { cloudsTL } from "./clouds"
import { grassTL } from "./grass"
import { treeTL } from "./tree"
import { ufoAppearsTL } from "./ufoAppears"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(sunsetTL)
        .add(wavesTL, "-=2")
        .add(sunrayTL)
        .add(cloudsTL)
        .add(grassTL, "-=2")
        .add(treeTL)
        .add(ufoAppearsTL);


// console.log(numberThing);

GSDevTools.create();