import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 70 characters: an approval carrying quiet dread.
// No newline is appended, so the file holds exactly the comment.
const LINE =
  "LGTM. Merging before I remember why we were afraid to touch this file.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
