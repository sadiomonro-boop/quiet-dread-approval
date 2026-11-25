import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 92 characters: an approval carrying quiet dread.
// No newline is appended, so the file holds exactly the comment.
const LINE =
  "Approved. The diff is clean, the tests pass, and I have no idea what any of it does anymore.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
