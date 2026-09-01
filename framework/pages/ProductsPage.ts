import { expect, Page } from '@playwright/test';
import { PageBase } from './PageBase';

export class ProductsPage extends PageBase {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Add first product to cart
  async AddProductToCart() {
    await this.getLocatorByFirstDataTest('add-to-cart-').first().click();
  }
  
  // Verify cart badge
  async VerifyCartBadge(count: string) {
    await expect(this.getLocator('.shopping_cart_badge')).toHaveText(`${count}`);
  }

  // Open cart
  async OpenCart() {
    await this.getLocator('.shopping_cart_link').click();
  }
}