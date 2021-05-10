import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { sunsetTL } from "./sunset"
import { wavesTL } from "./waves"
import { sunrayTL } from "./sunray"
import { cloudsTL } from "./clouds"
import { grassTL } from "./grass"
import { treeTL } from "./tree"
import { ufoAppearsTL } from "./ufoAppears"
import { flyOutTL } from "./flyOut"
import { windTL } from "./wind"
import { liftOffTL } from "./liftOff"
// import { starsOutTL } from "./starsOut"
import { intoSpaceTL } from "./intoSpace"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(sunsetTL)
        .add(wavesTL, "-=2")
        .add(sunrayTL)
        .add(cloudsTL, "+=0.5")
        .add(grassTL, "-=2")
        .add(treeTL, "-=.5")
        .add(ufoAppearsTL, "+=.5")
        .add(flyOutTL, "+=1")
        .add(windTL, "-=5")
        .add(liftOffTL)
        // .add(starsOutTL)
        .addLabel("marker")
        .add(intoSpaceTL);

        mainTL.play("marker");
        // mainTL.play();

// console.log(numberThing);

// GSDevTools.create();