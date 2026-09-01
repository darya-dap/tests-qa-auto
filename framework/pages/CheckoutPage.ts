import { expect, Page } from '@playwright/test';
import { PageBase } from './PageBase';

export class CheckoutPage extends PageBase {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Fill customer information
  async FillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
    await this.getLocatorByDataTest('firstName').fill(firstName);
    await this.getLocatorByDataTest('lastName').fill(lastName);
    await this.getLocatorByDataTest('postalCode').fill(postalCode);
  }

  // Continue checkout
  async ContinueCheckout() {
    await this.getLocatorByDataTest('continue').click();
  }

  // Checkout
  async Checkout() {
    await this.getLocatorByDataTest('checkout').click();
  }

  // Verify checkout overview page
  async VerifyCheckoutOverview() {
    await expect(this.getLocator('.title')).toHaveText('Checkout: Overview');
  }

  // Verify item is present on overview page
  async VerifyItemInOverview(count: number) {
    await expect(this.getLocator('.cart_item')).toHaveCount(Number(count));
  }

  // Finish order
  async FinishOrder() {
    await this.getLocatorByDataTest('finish').click();
  }

  // Verify order completion
  async VerifyOrderCompletion() {
    await expect(this.getLocator('.complete-header')).toHaveText('Thank you for your order!');
  }
}