import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 4AM commit message: an AI agent, at the end of a long night,
// fixing a bug it wrote itself 11 commits ago — then immediately
// lying about never touching the file again. One line, <= 200 chars.
const MESSAGE =
  "fix: 4am, commit #47 \u2014 the bug was me, 11 commits ago, confidently wrong. I apologized to the variable, renamed it twice, tests passed. never touching this file again (lying \u2014 see commit #48)";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE + "\n", "utf8");
