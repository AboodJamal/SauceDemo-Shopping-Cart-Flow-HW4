# 🧪 Playwright Test: SauceDemo Shopping Cart Flow

This project automates a typical user flow on [SauceDemo](https://www.saucedemo.com/) using **Playwright**.  
It includes login, adding products to the cart, verifying cart contents, and logging out.

---

## 📂 Project Structure

```
📁 your-folder/
├── saucedemo.cart-flow.spec.js   # Playwright test script
└── README.md                     # This file
```

---

## 🚀 Getting Started

### 1. Clone the Repository (or create your folder manually)
```bash
mkdir saucedemo-playwright-test
cd saucedemo-playwright-test
```

### 2. Initialize Node.js and Install Playwright
```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

---

## ▶️ Run the Test

```bash
npx playwright test saucedemo.cart-flow.spec.js
```

You can also use:
```bash
npx playwright test
```
...if it's the only test in your `tests` folder or root.

---

## 🔐 Login Credentials (Test Account)

- **Username:** `standard_user`
- **Password:** `secret_sauce`

---

## 📝 Test Steps Explained

1. **Visit the Website**  
   Navigate to `https://www.saucedemo.com/`

2. **Login**  
   Enter credentials and submit the login form

3. **Add Items to Cart**  
   - Add **Sauce Labs Backpack**
   - Add **Sauce Labs Bolt T-Shirt**

4. **Go to Cart**  
   Click the shopping cart icon

5. **View a Specific Product**  
   Click on the Backpack to view product detail

6. **Go Back to Product List**

7. **Logout**  
   Open side menu and logout

---

## 🛠️ Tools Used

- [Playwright](https://playwright.dev/) — End-to-end testing framework
- JavaScript (ES6) — Test scripting language

---

## 📸 Optional: Run with UI (for demo)

If you want to **see the browser**, edit your script like this:

```js
const browser = await chromium.launch({ headless: false });
```

---

## ✅ Homework Done ✔️

This script covers:
- Logging in
- Adding items to the cart
- Verifying product flow
- Logging out

Perfectly meets your assignment requirements! 🎯

---

## 📬 Author

*Made with ❤️ by [Your Name Here]*
