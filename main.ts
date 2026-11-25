import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — a single funny line, at most 200 characters.
// The line is fixed and deterministic: no randomness, no network, no input.
// It lands on its own: a specific first-person setup, then a twist in the
// second half where the person paid to fix the problem becomes the problem.
const LINE =
  "My therapist said I keep dating men who ghost me, then billed me for the hour and vanished mid-sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
