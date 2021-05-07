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

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(sunsetTL)
        .add(wavesTL, "-=2")
        .add(sunrayTL)
        .add(cloudsTL, "-=.5")
        .add(grassTL, "-=2")
        .add(treeTL, "-=.5")
        // .addLabel("marker")

        .add(ufoAppearsTL, "+=.5")
        .add(flyOutTL, "+=1")
        .add(windTL, "-=5")
        .add(liftOffTL);

        // mainTL.play("marker");

// console.log(numberThing);

// GSDevTools.create();