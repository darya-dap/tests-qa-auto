import { expect, Page } from '@playwright/test';

export class PageBase {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public getLocator(value: string) {
  return this.page.locator(`${value}`);
  }

  public getLocatorByDataTest(value: string) {
  return this.page.locator(`[data-test="${value}"]`);
  }

  public async navigate(url: string) {
    await this.page.goto(`${url}`);
  }

  public async AssertError(expectedMessage: string) {
    await expect(this.getLocatorByDataTest('error'))
      .toContainText(expectedMessage);
  }
}