import {Page, Locator} from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly warningMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.locator('#name');
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.confirmPassword = page.locator('#confirmPassword');
    this.registerButton = page.locator('button[type="submit"]');
    this.warningMessage = page.locator('#message');
  }

  async goToRegisterPage() {
    await this.page.goto('https://horadoqa.github.io/login/pages/cadastro.html');
  }

   async isNameRequired() {
    return await this.name.evaluate((element: HTMLInputElement) => {
      return element.validity.valueMissing;
    });
  }


  async isEmailRequired() {
    return await this.email.evaluate((element: HTMLInputElement) => {
      return element.validity.valueMissing;
    });
  }

  async isEmailInvalid() {
  return await this.email.evaluate((element: HTMLInputElement) => {
    return element.validity.typeMismatch;
  });
}
  async isPasswordRequired() {
    return await this.password.evaluate((element: HTMLInputElement) => {
      return element.validity.valueMissing;
    });
  }

  async isPasswordTooShort() {
  return await this.password.evaluate((element: HTMLInputElement) => {
    return element.validity.tooShort;
  });
}

  async register(name: string, email: string, password: string, confirmPassword: string) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
    await this.registerButton.click();
  }
}