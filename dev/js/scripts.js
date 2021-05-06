import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { sunsetTL } from "./sunset"
import { wavesTL } from "./waves"
import { sunrayTL } from "./sunray"
import { cloudsTL } from "./clouds"
import { grassTL } from "./grass"
import { treeTL } from "./tree"
import { ufoAppearsTL } from "./ufoAppears"
import { lifeOffTL } from "./liftOff"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(sunsetTL)
        .add(wavesTL, "-=2")
        .add(sunrayTL)
        .add(cloudsTL)
        .add(grassTL, "-=2")
        .add(treeTL, "-=.5")
        .add(ufoAppearsTL, "+=.5")
        .addLabel("marker")
        .add(lifeOffTL, "+=1");

        mainTL.play("marker");

// console.log(numberThing);

// GSDevTools.create();