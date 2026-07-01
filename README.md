# feedback board (messy twin — DO NOT ship this)

This is a **deliberately bad** vibe-coded version of the same feedback board as
`../feedback-board-gold`. Same feature, opposite quality. It exists to prove
`bettervibe-audit` catches real problems: it scores ~30 (F), the gold repo
scores ~100 (A).

What's wrong with it (on purpose):
- One 200-line god file with three copy-pasted CRUD blocks (heavy duplication)
- Hardcoded secrets + a committed `.env`, no `.gitignore`
- `any` everywhere, no `tsconfig`, no strictness
- Zero tests, no coverage, no lint config, no CI
- Empty `catch` that swallows every error

Do not use this as a template. That's the point.
