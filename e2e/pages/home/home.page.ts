import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    private readonly carousel: Locator;

    constructor(private page: Page) {
        this.carousel = this.page.locator('#slider');
    }

    async verifyHomePageIsVisible(): Promise<void> {
        await expect(this.carousel).toBeVisible();
    }
}