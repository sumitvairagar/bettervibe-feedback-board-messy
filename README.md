# feedback board (messy twin — DO NOT ship this)

[![Launch Readiness](https://img.shields.io/badge/Launch_Readiness-16%2F100_(F)-critical)](./LAUNCH-READINESS.md)

👉 **[See why it scores 16/100 →](./LAUNCH-READINESS.md)**

A **deliberately bad** vibe-coded version of the same feedback board as
[`feedback-board-gold`](https://github.com/sumitvairagar/bettervibe-feedback-board-gold)
(which scores 100/100). Same feature, opposite quality. It exists to prove
`bettervibe-audit` catches real problems.

What's wrong with it, on purpose: one god file with copy-pasted CRUD blocks,
hardcoded secrets + a committed `.env`, `any` everywhere, no `tsconfig`, zero
tests, no lint, no CI, an empty `catch` that swallows every error, and this thin
README. **All secrets are fake placeholders.** Do not use this as a template.
