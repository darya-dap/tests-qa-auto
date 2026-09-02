# 🧪 Tests QA Auto

Automated UI tests implemented with **Playwright** for the SauceDemo application.

**Application Under Test:** [SauceDemo](https://www.saucedemo.com/)
**Framework:** Playwright
**Test Type:** UI / End-to-End (E2E)

---

# 📋 Covered Test Suites

- ✅ SauceDemo Login
- ✅ SauceDemo Checkout
---

# Test Suite: SauceDemo Login

## TC-001: Successful Login with Valid Credentials

### Objective
Verify that a user can login with valid credentials.

### Preconditions
Application https://www.saucedemo.com/ is available.
User account exists.

### Test Data
| Username | Password |
|-----------|-----------|
| standard_user | secret_sauce |

### Steps
1. Navigate to SauceDemo login page https://www.saucedemo.com/.
2. Enter valid username.
3. Enter valid password.
4. Click Login button.

### Expected Result
- User is successfully authenticated.
- User is redirected to the inventory page https://www.saucedemo.com/inventory.html.
- Products title is displayed.

## TC-002: Login with Invalid Username

### Objective
Verify that login fails when an invalid username is entered.

### Preconditions
User is on login page https://www.saucedemo.com/.

### Test Data
| Username | Password |
|-----------|-----------|
| wrong_user | secret_sauce |

### Steps
1. Navigate to login page https://www.saucedemo.com/.
2. Enter invalid username.
3. Enter valid password.
4. Click Login.

### Expected Result
- Login is rejected.
- Error message is displayed: "Epic sadface: Username and password do not match any user in this service".
- User remains on login page.

## TC-003: Login with Invalid Password

### Objective
Verify that login fails when an invalid password is entered.

### Preconditions
User is on login page https://www.saucedemo.com/.

### Test Data
| Username | Password |
|-----------|-----------|
| standard_user | wrong_password |

### Steps
1. Navigate to login page https://www.saucedemo.com/.
2. Enter valid username.
3. Enter invalid password.
4. Click Login.

### Expected Result
- Login is rejected.
- Error message is displayed: "Epic sadface: Username and password do not match any user in this service".
- User remains on login page.

## TC-004: Login with Empty Username

### Objective
Verify validation when username field is empty.

### Preconditions
User is on login page https://www.saucedemo.com/.

### Test Data
| Username | Password |
|-----------|-----------|
| Empty | secret_sauce |

### Steps
1. Navigate to login page https://www.saucedemo.com/.
2. Leave Username field empty.
3. Enter valid password.
4. Click Login.

### Expected Result
- Login is rejected.
- Error message is displayed: "Epic sadface: Username is required".
- User remains on login page.

## TC-005: Login with Empty Password

### Objective
Verify validation when password field is empty.

### Preconditions
User is on login page https://www.saucedemo.com/.

### Test Data
| Username | Password |
|-----------|-----------|
| standard_user | Empty |

### Steps
1. Navigate to login page https://www.saucedemo.com/.
2. Enter valid username.
3. Leave Password field empty.
4. Click Login.

### Expected Result
- Login is rejected.
- Error message is displayed: "Epic sadface: Password is required".
- User remains on login page.

# Test Suite: SauceDemo Checkout

## TC-006: Successfully Add Product to Cart and Complete Checkout

### Objective
Verify that a logged-in user can add a product to the cart, proceed through checkout, and successfully complete an order.

### Preconditions
SauceDemo application is available https://www.saucedemo.com/.
Login with valid credentials.

### Steps
1. Click "Add to Cart" on the first available product on the page https://www.saucedemo.com/inventory.html
2. Verify cart badge. Cart badge displays 1.
3. Click Cart icon. Cart page opens.
4. Verify cart contents. One product is displayed in cart.
5. Click "Checkout". Checkout Information page opens.
6. Enter First Name: "Darya". Field accepts value.
7. Enter Last Name: "Shelupenko". Field accepts value.
8. Enter Postal Code: "12345". Field accepts value.
9. Click "Continue". Checkout Overview page opens.
10. Verify item count. One selected product appears in overview.
11. Click "Finish". Order submission is processed.
12. Verify success message. "Thank you for your order!" is displayed.

### Expected Result
Product is successfully added to the cart.
Cart contains exactly one item.
User can proceed through checkout.
Checkout Overview page displays selected product.
Order is completed successfully.
Confirmation message "Thank you for your order!" is displayed.

# 📊 How to Check Test Results

- Go to GitHub → Actions.
- Select Playwright Tests workflow.

# ✅ Automation Coverage

| Test Case | Status |
|------------|----------|
| TC-001 Successful Login | Automated |
| TC-002 Invalid Username | Automated |
| TC-003 Invalid Password | Automated |
| TC-004 Empty Username | Automated |
| TC-005 Empty Password | Automated |
| TC-006 Complete Checkout Flow | Automated |

---
**Technology Stack:** TypeScript + Playwright + Page Object Model (POM)