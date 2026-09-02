# tests-qa-auto

## The following Test Suites are covered:

## Test Suite: SauceDemo Login

# TC-001: Successful Login with Valid Credentials

- Objective: Verify that a user can login with valid credentials.

- Preconditions:
Application https://www.saucedemo.com/ is available.
User account exists.

- Test Data
Username: standard_user; Password: secret_sauce

- Steps
-- Navigate to SauceDemo login page https://www.saucedemo.com/.
-- Enter valid username.
-- Enter valid password.
-- Click Login button.

Expected Result:
User is successfully authenticated.
User is redirected to the inventory page https://www.saucedemo.com/inventory.html.
Products title is displayed.

# TC-002: Login with Invalid Username

- Objective: Verify that login fails when an invalid username is entered.

- Preconditions
User is on login page https://www.saucedemo.com/.

- Test Data
Username: wrong_user; Password: secret_sauce

- Steps
-- Navigate to login page https://www.saucedemo.com/.
-- Enter invalid username.
-- Enter valid password.
-- Click Login.

Expected Result:
Login is rejected.
Error message is displayed:
"Epic sadface: Username and password do not match any user in this service"
User remains on login page.

# TC-003: Login with Invalid Password

- Objective: Verify that login fails when an invalid password is entered.

- Preconditions
User is on login page https://www.saucedemo.com/.

- Test Data
Username: standard_user; Password: wrong_password

- Steps
-- Navigate to login page https://www.saucedemo.com/.
-- Enter valid username.
-- Enter invalid password.
-- Click Login.

Expected Result:
Login is rejected.
Error message is displayed:
"Epic sadface: Username and password do not match any user in this service"
User remains on login page.

# TC-004: Login with Empty Username

- Objective: Verify validation when username field is empty.

- Preconditions
User is on login page https://www.saucedemo.com/.

- Test Data
Username: "" Password: secret_sauce

- Steps
-- Navigate to login page https://www.saucedemo.com/.
-- Leave Username field empty.
-- Enter valid password.
-- Click Login.

Expected Result:
Login is rejected.
Error message is displayed:
"Epic sadface: Username is required"
User remains on login page.

# TC-005: Login with Empty Password

- Objective: Verify validation when password field is empty.

- Preconditions
User is on login page https://www.saucedemo.com/.

- Test Data
Username: standard_user; Password: ""

- Steps
-- Navigate to login page https://www.saucedemo.com/.
-- Enter valid username.
-- Leave Password field empty.
-- Click Login.

Expected Result:
Login is rejected.
Error message is displayed:
"Epic sadface: Password is required"
User remains on login page.

## Test Suite: SauceDemo Checkout

# TC-001: Successfully Add Product to Cart and Complete Checkout

- Objective: Verify that a logged-in user can add a product to the cart, proceed through checkout, and successfully complete an order.

- Preconditions
SauceDemo application is available https://www.saucedemo.com/.
Login with valid credentials.

- Test Steps
-- Click "Add to Cart" on the first available product on the page https://www.saucedemo.com/inventory.html
-- Verify cart badge. Cart badge displays 1.
-- Click Cart icon. Cart page opens.
-- Verify cart contents. One product is displayed in cart.
-- Click "Checkout". Checkout Information page opens.
-- Enter First Name: "Darya". Field accepts value.
-- Enter Last Name: "Shelupenko". Field accepts value.
-- Enter Postal Code: "12345". Field accepts value.
-- Click "Continue". Checkout Overview page opens.
-- Verify item count. One selected product appears in overview.
-- Click "Finish". Order submission is processed.
-- Verify success message. "Thank you for your order!" is displayed.

Expected Result:
Product is successfully added to the cart.
Cart contains exactly one item.
User can proceed through checkout.
Checkout Overview page displays selected product.
Order is completed successfully.
Confirmation message "Thank you for your order!" is displayed.

## To check Run Tests result

- Go to GitHub → Actions.
- Select Playwright Tests workflow.