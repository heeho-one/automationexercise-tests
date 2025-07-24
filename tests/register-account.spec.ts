import { test } from "../e2e/fixtures/page.fixture";
import { UITestDataUtils } from "../e2e/utils/ui-test-data.utils";

test.describe("User Registration", () => {
    test("user should be able to register a new account", async ({ page, homePage, navBarPage, registrationPage, accountInformationPage, messagePage }) => {

        let userInfo = UITestDataUtils.generateRandomUserAccountInformation();

        await page.goto("/");
        await homePage.verifyHomePageIsVisible();
        await navBarPage.navigateToSignupLogin();
        await registrationPage.verifySectionHeaderIsVisible();
        await registrationPage.signup(userInfo.name, userInfo.email);

        await accountInformationPage.verifySectionHeaderIsVisible();
        await accountInformationPage.fillAccountInformation(userInfo);
        await accountInformationPage.submitAccountInformation();

        await messagePage.verifyAccountCreatedMessageIsVisible();
        await messagePage.clickContinueButton();
        await navBarPage.verifyLoggedInAsButtonIsVisible(userInfo.name);

        await navBarPage.clickDeleteAccount();
        await messagePage.verifyAccountDeletedMessageIsVisible();
        await messagePage.clickContinueButton();
        await homePage.verifyHomePageIsVisible();

    });
});