# One-Star Review of Something Essential

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/gibalers-rgb/u-0xb3e689-one-star-review-of-something-essential-c7234629/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/gibalers-rgb/u-0xb3e689-one-star-review-of-something-essential-c7234629/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

A one-star review of an everyday essential — a make.fun bounty entry by
@gibalers-rgb.

## The review

> Sleep: I pay eight hours a night for it and wake up owing more. One star.

73 characters, one line. Sleep is the bill nobody can dodge — eight hours a
night, every night — and the sharpest true grievance is that the payment
never clears: you wake up still owing. Filed flat and deadpan, no winking,
no exclamation mark, and the sting lands in the last few words.

## How it runs

`main.ts` (Node 22, standard library only) writes the review to
`/output/entry.txt`, after checking it against the bounty gate: 1–160
characters, a single line, no exclamation marks, no double spaces. It reads
the file back to confirm the bytes on disk are exactly the review.

```sh
node main.ts
```
