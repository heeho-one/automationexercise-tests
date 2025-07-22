import { expect, Locator, Page } from "@playwright/test";

export class MessagePage {
    private readonly accountCreatedMessage: Locator;
    private readonly accountDeletedMessage: Locator;
    private readonly continueButton: Locator;

    constructor(private page: Page) {
        this.accountCreatedMessage = this.page.getByTestId('account-created');
        this.accountDeletedMessage = this.page.getByTestId('account-deleted');
        this.continueButton = this.page.getByTestId('continue-button');
    }

    async clickContinueButton(): Promise<void> {
        await this.continueButton.click();
    }

    async verifyAccountCreatedMessageIsVisible(): Promise<void> {
        await expect(this.accountCreatedMessage).toBeVisible();
        await expect(this.accountCreatedMessage).toHaveText('Account Created!');
    }

    async verifyAccountDeletedMessageIsVisible(): Promise<void> {
        await expect(this.accountDeletedMessage).toBeVisible();
        await expect(this.accountDeletedMessage).toHaveText('Account Deleted!');
    }
}