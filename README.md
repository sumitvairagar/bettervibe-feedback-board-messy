# feedback board (messy twin — DO NOT ship this)

[![Launch Readiness](https://img.shields.io/badge/Launch_Readiness-F-critical)](./LAUNCH-READINESS.md)

👉 **[See the full audit →](./LAUNCH-READINESS.md)**

A **deliberately bad** vibe-coded version of the same feedback board as
[`feedback-board-gold`](https://github.com/sumitvairagar/bettervibe-feedback-board-gold)
(which scores 100/100). Same feature, opposite quality. It's the reference
"kitchen-sink" repo that trips **every** check `bettervibe-audit` runs.

What's wrong with it, on purpose:

- **Secrets** — hardcoded credentials + a committed `.env`, plus generic
  high-entropy keys (Stripe, Supabase, a raw RSA key) that only entropy-based
  scanning catches.
- **Security holes** — SQL injection, command injection, `eval()` of input, and
  MD5 for passwords.
- **Vulnerable dependencies** — pinned to versions with known CVEs (axios,
  lodash, minimist, mysql).
- **Architecture** — a 500-line god file of copy-pasted CRUD blocks, `any`
  everywhere, no `tsconfig`.
- **Unfinished code** — `throw new Error("not implemented")` stubs, TODO/FIXME
  debris, and dead unused functions.
- **No safety net** — zero tests, no lint, no CI, an empty `catch` that swallows
  every error, and this thin README.

**All secrets are fake random placeholders.** Do not use this as a template.
