import { GenericSolverDebugger } from "@tscircuit/solver-utils/react"
import type { TraceProblem } from "../../lib/45DegreeTraceSolver/types.ts"
import { FortyFiveDegreeTraceSolver } from "../../lib/45DegreeTraceSolver.ts"
import problem from "./basics01-input.json"
export default () => {
  return (
    <GenericSolverDebugger
      createSolver={() =>
        new FortyFiveDegreeTraceSolver(problem as TraceProblem)
      }
    />
  )
}
