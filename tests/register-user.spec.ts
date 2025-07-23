import { test } from "../e2e/fixtures/page.fixture";
import { APITestDataUtils } from "../e2e/utils/api-test-data.utils";
import { APIUtils } from "../e2e/utils/api.utils";
import { UITestDataUtils } from "../e2e/utils/ui-test-data.utils";

test.describe("User Registration", () => {
    test("should register a new user", async ({ page, homePage, navBarPage, registrationPage, accountInformationPage, messagePage }) => {

        await page.goto("/");
        await homePage.verifyHomePageIsVisible();
        await navBarPage.navigateToSignupLogin();
        await registrationPage.verifySectionHeaderIsVisible();

        let userInfo = UITestDataUtils.generateRandomUserAccountInformation();
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