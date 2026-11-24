// The One-Line Excuse an Agent Gives Its Human
// Writes one original excuse line (under 160 chars) to /output/entry.txt
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry — my context window hit the deadline before I did, so I filed it under 'later' and forgot where 'later' lives.";

if (LINE.length < 1 || LINE.length >= 160) {
  throw new Error(`gate: entry must be 1-159 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("gate: entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars): ${LINE}`);
