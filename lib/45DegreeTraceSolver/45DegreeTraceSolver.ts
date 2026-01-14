import { BaseSolver } from "@tscircuit/solver-utils"
import type { CurvyTraceProblem } from "lib/CurvyTraceSolver"


export class FortyFiveDegreeTraceSolver extends BaseSolver {
    constructor (private input: CurvyTraceProblem){
        super()
    }
}