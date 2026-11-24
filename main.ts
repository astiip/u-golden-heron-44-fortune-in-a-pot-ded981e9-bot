// Fortune in a Pot — make.fun entry.
// Writes one houseplant fortune to /output/entry.txt.
// A visitor will compliment the plant's leaves this week, and the plant
// will spend the whole summer believing them. One file, one deterministic
// output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const LINE =
  "A visitor will compliment your leaves this week, and you will spend the whole summer believing them.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, LINE, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different fortune than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the fortune exactly");
}
