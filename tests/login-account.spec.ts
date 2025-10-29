import { test } from "../e2e/fixtures/fixtures";
import { APITestDataUtils } from "../e2e/utils/api-test-data.utils";

test.describe("User Login", () => {
  test("user should be able to login using a valid account", async ({
    page,
    homePage,
    navBarPage,
    loginPage,
    messagePage,
    apiUtils,
  }) => {
    const userInfo = APITestDataUtils.generateRegisterUserPayload();
    apiUtils.registerAccount(APITestDataUtils.convertToFormData(userInfo));

    await page.goto("/");
    await homePage.verifyHomePageIsVisible();
    await navBarPage.navigateToSignupLogin();
    await loginPage.verifySectionHeaderIsVisible();
    await loginPage.login(userInfo.email, userInfo.password);
    await navBarPage.verifyLoggedInAsButtonIsVisible(userInfo.name);
    await navBarPage.clickDeleteAccount();
    await messagePage.verifyAccountDeletedMessageIsVisible();
    await messagePage.clickContinueButton();
    await homePage.verifyHomePageIsVisible();
  });

  test("user should not be able to login with invalid credentials", async ({
    page,
    homePage,
    navBarPage,
    loginPage,
  }) => {
    await page.goto("/");
    await homePage.verifyHomePageIsVisible();
    await navBarPage.navigateToSignupLogin();
    await loginPage.verifySectionHeaderIsVisible();
    await loginPage.login("notan@email.com", "randompassword");
    await loginPage.verifyErrorMessageIsVisible();
  });
});
