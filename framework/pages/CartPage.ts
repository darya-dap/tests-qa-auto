import { expect, Page } from '@playwright/test';
import { PageBase } from './PageBase';

export class CartPage extends PageBase {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Verify item exists in cart
  async VerifyCart(count: number) {
    await expect(this.getLocator('.cart_item')).toHaveCount(Number(count));
  }

  // Checkout
  async Checkout() {
    await this.getLocatorByDataTest('checkout').click();
  }
}