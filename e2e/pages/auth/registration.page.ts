import { expect, Locator, Page } from "@playwright/test";

export class RegistrationPage {
    private readonly sectionHeader: Locator;
    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly signupButton: Locator;
    

    constructor(private page: Page) {
        this.sectionHeader = this.page.getByRole('heading', { name: 'New User Signup!' });
        this.nameInput = this.page.getByTestId('signup-name');
        this.emailInput = this.page.getByTestId('signup-email');
        this.signupButton = this.page.getByTestId('signup-button');
    }

    async signup(name: string, email: string): Promise<void> {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    }

    async verifySectionHeaderIsVisible(): Promise<void> {
        await expect(this.sectionHeader).toBeVisible();
    }
}