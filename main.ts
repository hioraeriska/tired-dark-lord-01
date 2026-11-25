import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One monologue, exactly 100 words: a dark lord who has held his mountain
// for forty years, receiving the hero at the door. The weariness is never
// named — it shows in the crooked banners nobody fixes, the sword stuck in
// the door since Tuesday, and a doom that keeps getting put off until
// tomorrow. The scheme (the ritual, the eclipse, the blackened sky) is real;
// the sting is that tonight, it waits.
const MONOLOGUE =
  "Ah. The hero arrives. Right on time. I suppose someone should be. " +
  "Forty years I have kept this mountain, and the banners hang crooked. " +
  "No one fixes them. No one fixes anything.\n\n" +
  "You want the sword. Take it. It has been stuck in the door since Tuesday, " +
  "and the ravens have stopped coming to look at it.\n\n" +
  "My scheme, yes, the ritual, the eclipse, the blackened sky. It waits " +
  "for midnight. It can wait one more night. It has waited forty years; " +
  "it knows patience.\n\n" +
  "Kneel, then. Quickly. The torches burn low, and I have a kingdom to " +
  "ruin tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE + "\n", "utf8");
