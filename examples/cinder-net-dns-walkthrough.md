# Cinder Net DNS Gate Walkthrough

This walk-through keeps the domain vocabulary close to the data instead of burying it in prose.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 148 | ship |
| stress | retry pressure | 172 | ship |
| edge | route drift | 162 | ship |
| recovery | socket risk | 210 | ship |
| stale | packet span | 221 | ship |

Start with `stale` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `packet span` against `packet span`, not the raw score alone.
