import { test, expect } from '@playwright/test';
import { LoginPage } from '../framework/pages/LoginPage';
import { CheckoutPage } from '../framework/pages/CheckoutPage';
import { CartPage } from '../framework/pages/CartPage';
import { ProductsPage } from '../framework/pages/ProductsPage';
import {
  validUser
} from '../framework/test-data/loginData';

let checkoutPage: CheckoutPage;
let loginPage: LoginPage;
let cartPage: CartPage;
let productsPage: ProductsPage;

test.describe('SauceDemo Checkout', () => {
 test.beforeEach(async ({ playwright, page }) => {
    loginPage = new LoginPage(page);
    checkoutPage = new CheckoutPage(page);
    cartPage = new CartPage(page);
    productsPage = new ProductsPage(page);

    await loginPage.NavigateToLoginPage();

    await loginPage.Login(
      validUser.username,
      validUser.password
    );
  });

 test('Successful - Add product to cart and finish order', async ({ page }) => {

  // Add first product to cart
  await productsPage.AddProductToCart();

  // Verify cart badge
  await productsPage.VerifyCartBadge('1');

  // Open cart
  await productsPage.OpenCart();

  // Verify item exists in cart
  await cartPage.VerifyCart(1)

  // Checkout
  await cartPage.Checkout();

  // Fill customer information
  await checkoutPage.FillCustomerInformation('Darya', 'Shelupenko', '12345');

  // Continue checkout
  await checkoutPage.ContinueCheckout();

  // Verify checkout overview page
  await checkoutPage.VerifyCheckoutOverview();

  // Verify item is present on overview page
  await checkoutPage.VerifyItemInOverview(1);

  // Finish order
  await checkoutPage.FinishOrder();

  // Verify order completion
  await checkoutPage.VerifyOrderCompletion();
});
});