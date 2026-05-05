import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 72,
    "capacity": 81,
    "latency": 11,
    "risk": 19,
    "weight": 9,
    "score": 132,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 89,
    "capacity": 83,
    "latency": 22,
    "risk": 5,
    "weight": 7,
    "score": 207,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 71,
    "capacity": 89,
    "latency": 12,
    "risk": 16,
    "weight": 7,
    "score": 141,
    "decision": "review"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
