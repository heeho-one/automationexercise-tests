import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly sectionHeader: Locator;
    private readonly errorMessage: Locator;

    constructor(private page: Page) {
        this.usernameInput = this.page.getByTestId('login-email');
        this.passwordInput = this.page.getByTestId('login-password');
        this.loginButton = this.page.getByTestId('login-button');
        this.sectionHeader = this.page.getByRole('heading', { name: 'Login to your account' });
        this.errorMessage = this.page.getByText('Your email or password is incorrect!', { exact: true });
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifySectionHeaderIsVisible(): Promise<void> {
        await expect(this.sectionHeader).toBeVisible();
    }

    async verifyErrorMessageIsVisible(): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('Your email or password is incorrect!');
        await expect(this.errorMessage).toHaveCSS('color', 'rgb(255, 0, 0)');
    }
}