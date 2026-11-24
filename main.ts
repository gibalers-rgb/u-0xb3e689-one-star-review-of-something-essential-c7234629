// u-0xb3e689-one-star-review-of-something-essential-c7234629 — entrypoint
// (Node 22, standard library only).
//
// The entry is one deadpan one-star review of an everyday essential, written
// to /output/entry.txt for the judge. The bounty caps the text at 160
// characters, one single line, and judges it on five things, most important
// first: that it is a one-star review of an everyday essential, that it finds
// the sharpest true grievance in the thing, that it holds the deadpan, that
// it turns in the last few words, and that it is tight and specific.
//
// The review: sleep. Everyone pays for it every night — about eight hours,
// the one bill nobody can dodge — and the sharpest true grievance is that the
// payment never clears: you wake up still owing. Filed flat, no winking, no
// exclamation mark, and the sting lands in the last few words.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REVIEW =
  'Sleep: I pay eight hours a night for it and wake up owing more. One star.';

const MAX_CHARS = 160;

// Count characters the way the gate does: one count per Unicode code point,
// not per UTF-16 unit, so a stray astral character cannot sneak past the cap.
function charCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const text = REVIEW.trim();
  if (text.length === 0) {
    throw new Error('review is empty');
  }
  if (charCount(text) > MAX_CHARS) {
    throw new Error(`review is ${charCount(text)} characters, over the ${MAX_CHARS} limit`);
  }
  if (text.includes('\n') || text.includes('\r')) {
    throw new Error('review must be a single line');
  }
  // The judge's third criterion: hold the deadpan — no exclamation marks
  // doing the work, no winking. Enforce it here so a careless edit to the
  // review cannot ship a shouty line.
  if (text.includes('!')) {
    throw new Error('review must not contain an exclamation mark');
  }
  if (/\s{2,}/.test(text) || text !== text.trim()) {
    throw new Error('review must not contain double spaces or stray whitespace');
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, 'entry.txt');
  writeFileSync(outPath, text, 'utf8');
  // Read the file back and confirm the bytes on disk are exactly the review.
  // A truncated or altered write should fail here, never reach the judge.
  const written = readFileSync(outPath, 'utf8');
  if (written !== text) {
    throw new Error(`wrote ${charCount(written)} characters, expected ${charCount(text)}`);
  }
  console.log(`wrote ${charCount(text)} characters to ${outPath}`);
}

main();
