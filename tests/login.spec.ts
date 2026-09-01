import { test } from '@playwright/test';
import { LoginPage } from '../framework/pages/LoginPage';
import {
  validUser,
  negativeLoginCases
} from '../framework/test-data/loginData';

test.describe('SauceDemo Login', () => {
  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await loginPage.assertLoginSuccessful();
  });

  for (const testData of negativeLoginCases || []) {
    test(`Negative Login - ${testData.scenario}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.navigateToLoginPage();

      await loginPage.login(
        testData.username,
        testData.password
      );

      await loginPage.assertError(testData.error);
    });
  }
});