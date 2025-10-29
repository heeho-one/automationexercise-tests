import { test as base } from "@playwright/test";

import { AccountInformationPage } from "../pages/auth/account-information.page";
import { LoginPage } from "../pages/auth/login.page";
import { RegistrationPage } from "../pages/auth/registration.page";
import { HomePage } from "../pages/home/home.page";
import { NavbarPage } from "../pages/common/navbar.page";
import { MessagePage } from "../pages/common/message.page";

type PageFixtures = {
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
  accountInformationPage: AccountInformationPage;
  homePage: HomePage;
  navBarPage: NavbarPage;
  messagePage: MessagePage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  accountInformationPage: async ({ page }, use) => {
    await use(new AccountInformationPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  navBarPage: async ({ page }, use) => {
    await use(new NavbarPage(page));
  },
  messagePage: async ({ page }, use) => {
    await use(new MessagePage(page));
  },
});
