import { expect, Locator, Page } from "@playwright/test";

export class NavbarPage {
  private readonly homeButton: Locator;
  private readonly productsButton: Locator;
  private readonly cartButton: Locator;
  private readonly signupLoginButton: Locator;
  private readonly loggedInAsButon: Locator;
  private readonly deleteAccountButton: Locator;

  constructor(private page: Page) {
    this.homeButton = this.page.getByRole("link", { name: "Home" });
    this.productsButton = this.page.getByRole("link", { name: "Products" });
    this.cartButton = this.page.getByRole("link", { name: "Cart" });
    this.signupLoginButton = this.page.getByRole("link", {
      name: "Signup / Login",
    });
    this.loggedInAsButon = this.page.getByText("Logged in as");
    this.deleteAccountButton = this.page.getByRole("link", {
      name: "Delete Account",
    });
  }

  async navigateToHome(): Promise<void> {
    await this.homeButton.click();
  }

  async navigateToProducts(): Promise<void> {
    await this.productsButton.click();
  }

  async navigateToCart(): Promise<void> {
    await this.cartButton.click();
  }

  async navigateToSignupLogin(): Promise<void> {
    await this.signupLoginButton.click();
  }

  async clickDeleteAccount(): Promise<void> {
    await this.deleteAccountButton.click();
  }

  async verifyLoggedInAsButtonIsVisible(username: string): Promise<void> {
    await expect(this.loggedInAsButon).toBeVisible();
    await expect(this.loggedInAsButon).toContainText(username);
  }
}
