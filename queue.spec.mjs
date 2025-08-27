import { queue } from "./queue.mjs";
import fc from "fast-check"; // the problem seems to be triggered by fast-check being local and not from registry
import { jest } from "@jest/globals";

test("should resolve in call order", async () => {});
