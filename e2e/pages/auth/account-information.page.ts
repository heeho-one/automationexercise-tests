import { expect, Page, Locator } from "@playwright/test";
import { UserAccountInformation } from "../../interfaces/ui/user-account-information";
import { RegexUtils } from "../../utils/regex.utils";

export class AccountInformationPage {
    private readonly sectionHeader: Locator;
    private readonly titleSelector: Locator;
    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly birthMonthSelector: Locator;
    private readonly birthDaySelector: Locator;
    private readonly birthYearSelector: Locator;
    private readonly newsletterCheckbox: Locator;
    private readonly offersCheckbox: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly companyInput: Locator;
    private readonly address1Input: Locator;
    private readonly address2Input: Locator;
    private readonly countrySelector: Locator;
    private readonly stateInput: Locator;
    private readonly cityInput: Locator;
    private readonly zipCodeInput: Locator;
    private readonly mobileNumberInput: Locator;
    private readonly createAccountButton: Locator;

    constructor(private page: Page) {
        this.sectionHeader = this.page.getByRole('heading', { name: 'ENTER ACCOUNT INFORMATION' });
        this.titleSelector = this.page.getByTestId('title');
        this.nameInput = this.page.getByTestId('name');
        this.emailInput = this.page.getByTestId('email');
        this.passwordInput = this.page.getByTestId('password');
        this.birthMonthSelector = this.page.getByTestId('months');
        this.birthDaySelector = this.page.getByTestId('days');
        this.birthYearSelector = this.page.getByTestId('years');
        this.newsletterCheckbox = this.page.locator('#newsletter');
        this.offersCheckbox = this.page.locator('#optin');
        this.firstNameInput = this.page.getByTestId('first_name');
        this.lastNameInput = this.page.getByTestId('last_name');
        this.companyInput = this.page.getByTestId('company');
        this.address1Input = this.page.getByTestId('address');
        this.address2Input = this.page.getByTestId('address2');
        this.countrySelector = this.page.getByTestId('country');
        this.stateInput = this.page.getByTestId('state');
        this.cityInput = this.page.getByTestId('city');
        this.zipCodeInput = this.page.getByTestId('zipcode');
        this.mobileNumberInput = this.page.getByTestId('mobile_number');
        this.createAccountButton = this.page.getByTestId('create-account');
    }

    async fillAccountInformation(info: UserAccountInformation): Promise<void> {
        await this.titleSelector.getByLabel(RegexUtils.toRegexIgnoreLeadingAndTrailingWhitespace(info.title)).check();
        await this.passwordInput.fill(info.password);
        await this.birthMonthSelector.selectOption(info.birthMonth);
        await this.birthDaySelector.selectOption(info.birthDay.toString());
        await this.birthYearSelector.selectOption(info.birthYear.toString());
        await this.newsletterCheckbox.setChecked(info.newsletter);
        await this.offersCheckbox.setChecked(info.offers);
        await this.firstNameInput.fill(info.firstName);
        await this.lastNameInput.fill(info.lastName);
        await this.companyInput.fill(info.company);
        await this.address1Input.fill(info.address1);
        await this.address2Input.fill(info.address2);
        await this.countrySelector.selectOption(info.country);
        await this.stateInput.fill(info.state);
        await this.cityInput.fill(info.city);
        await this.zipCodeInput.fill(info.zipCode);
        await this.mobileNumberInput.fill(info.mobileNumber);
    }

    async submitAccountInformation(): Promise<void> {
        await this.createAccountButton.click();
    }

    async verifySectionHeaderIsVisible(): Promise<void> {
        await expect(this.sectionHeader).toBeVisible();
    }
}