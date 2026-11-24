import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Ramalan untuk tanaman pot: pengunjung akan memuji daunmu minggu ini,
// dan kamu akan menghabiskan seluruh musim panas mempercayainya.
const line =
  "A visitor will compliment your leaves this week, and you will spend the whole summer believing them.";

// Sanity checks: satu baris, ASCII saja, panjang 1-200 karakter.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length out of range: ${line.length}`);
}
if (/[^\x00-\x7F]/.test(line)) {
  throw new Error("entry must be ASCII only");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read-back verification: pastikan yang tertulis persis sama dengan line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("read-back mismatch: /output/entry.txt does not match line");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`read-back length out of range: ${written.length}`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("read-back must be a single line without newline");
}
