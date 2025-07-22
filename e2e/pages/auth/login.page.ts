import { Locator, Page } from "@playwright/test";

export class LoginPage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(private page: Page) {
        this.usernameInput = this.page.getByTestId('login-email');
        this.passwordInput = this.page.getByTestId('login-password');
        this.loginButton = this.page.getByTestId('login-button');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}