function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
