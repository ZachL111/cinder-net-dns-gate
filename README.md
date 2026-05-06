# cinder-net-dns-gate

`cinder-net-dns-gate` explores networking with a small TypeScript codebase and local fixtures. The technical goal is to design a TypeScript verification harness for dns systems, covering diagnostic reporting, negative fixtures, and failure-oriented tests.

## Use Case

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Cinder Net DNS Gate Review Notes

`stale` and `baseline` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Highlights

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/cinder-net-dns-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `packet span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Code Layout

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `packet span`, `retry pressure`, `route drift`, and `socket risk`.

The added TypeScript path is deliberately direct, with fixtures doing most of the explaining.

## Run The Check

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Regression Path

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Future Work

The repository is intentionally scoped to local checks. I would expand it by adding adversarial fixtures before adding features.
