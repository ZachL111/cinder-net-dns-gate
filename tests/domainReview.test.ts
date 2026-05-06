function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 47, slack: 50, drag: 24, confidence: 76 };
equal(domainReviewScore(item), 148);
equal(domainReviewLane(item), "ship");
