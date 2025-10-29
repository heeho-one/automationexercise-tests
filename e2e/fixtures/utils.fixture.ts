import { test as base } from "@playwright/test";
import { APIUtils } from "../utils/api.utils";

type UtilsFixture = {
  apiUtils: APIUtils;
};

export const test = base.extend<UtilsFixture>({
  apiUtils: async ({ request }, use) => {
    await use(new APIUtils(request));
  },
});
