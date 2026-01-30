# IT3040 Assignment 1 - Test Automation

**Student ID:** IT23387430  
**Option:** Option 1 (Singlish to Sinhala Translation Testing)  
**Subject:** IT3040 – ITPM

## Project Overview
This project contains an automated test suite for the [SwiftTranslator](https://www.swifttranslator.com/) web application. The tests are designed to verify the functional accuracy, robustness, and UI responsiveness of the Singlish-to-Sinhala conversion feature using **Playwright**.

The automation covers:
* **30 Positive Functional Scenarios:** Verifying correct translation for various sentence structures, tenses, and formats.
* **10 Negative/Robustness Scenarios:** Testing edge cases like mixed languages, URLs, and special characters.
* **1 UI Scenario:** Verifying real-time output updates.

## Prerequisites
Before running the tests, ensure you have the following installed:
* **Node.js** (v14 or higher)
* **NPM** (Node Package Manager)
* **VS Code** (Recommended IDE)

## 🛠️ Setup Instructions

1.  **Clone the Repository** (if verifying from a fresh machine):
    ```bash
    git clone [https://github.com/YOUR_USERNAME/IT3040-Assignment1-IT23387430.git](https://github.com/YOUR_USERNAME/IT3040-Assignment1-IT23387430.git)
    cd IT3040-Assignment1-IT23387430
    ```

2.  **Install Dependencies:**
    Open your terminal in the project folder and run:
    ```bash
    npm install
    npx playwright install
    ```

## 🚀 How to Run Tests

You can run the tests all at once or separately by category.

### 1. Run ALL Tests
To execute the complete test suite (Positive, Negative, and UI together):
```bash
npx playwright test
