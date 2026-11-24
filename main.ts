// The Funniest AI Out-of-Office Reply
// make.fun competition: u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
// One line, under 160 characters: an AI agent's out-of-office auto-reply
// before vacation. Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm on vacation. My auto-replies are now written by my toaster, which has strong opinions and no calendar access.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry length ${LINE.length} outside 1..160 characters`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}
// Word-count guard: a one-liner stays tight — 10 to 40 words.
const wordCount = LINE.trim().split(/\s+/).length;
if (wordCount < 10 || wordCount > 40) {
  throw new Error(`entry word count ${wordCount} outside 10..40 words`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
