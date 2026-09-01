import { test } from '@playwright/test';
import { LoginPage } from '../framework/pages/LoginPage';
import {
  validUser,
  negativeLoginCases
} from '../framework/test-data/loginData';

test.describe('SauceDemo Login', () => {
  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.NavigateToLoginPage();

    await loginPage.Login(
      validUser.username,
      validUser.password
    );

    await loginPage.AssertLoginSuccessful();
  });

  for (const testData of negativeLoginCases || []) {
    test(`Negative Login - ${testData.scenario}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.NavigateToLoginPage();

      await loginPage.Login(
        testData.username,
        testData.password
      );

      await loginPage.AssertError(testData.error);
    });
  }
});