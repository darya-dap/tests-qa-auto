import { expect, Page } from '@playwright/test';
import { PageBase } from './PageBase';

export class LoginPage extends PageBase {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  public async navigateToLoginPage() {
    await this.navigate('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.getLocatorByDataTest('username').fill(username);
    await this.getLocatorByDataTest('password').fill(password);
    await this.getLocatorByDataTest('login-button').click();
  }

  async assertLoginSuccessful() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.locator('.title'))
      .toHaveText('Products');
  }
}