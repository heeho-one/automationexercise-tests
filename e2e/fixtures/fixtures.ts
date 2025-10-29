import { mergeTests } from "@playwright/test";
import { test as pageFixtures } from "./page.fixture";
import { test as utilsFixtures } from "./utils.fixture";

export const test = mergeTests(pageFixtures, utilsFixtures);
