import { GenericSolverDebugger } from "@tscircuit/solver-utils/react"
import type { CurvyTraceProblem } from "../../lib/CurvyTraceSolver/types"
import { CurvyTraceSolver } from "../../lib/CurvyTraceSolver/CurvyTraceSolver"
import problem from "../../tests/repros/repro01-input.json"
export default () => {
  return (
    <GenericSolverDebugger
      createSolver={() => new CurvyTraceSolver(problem as CurvyTraceProblem)}
    />
  )
}
