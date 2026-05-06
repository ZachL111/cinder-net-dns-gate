import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 47, slack: 50, drag: 24, confidence: 76 };
assert.equal(domainReviewScore(item), 148);
assert.equal(domainReviewLane(item), "ship");
