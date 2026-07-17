import {Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly warningMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#button');
        this.warningMessage = page.locator('.error');
    }

    async goToLoginPage() {
        await this.page.goto('https://horadoqa.github.io/login/index.html');
    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}