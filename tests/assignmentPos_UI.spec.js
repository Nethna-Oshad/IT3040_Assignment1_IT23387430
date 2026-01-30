// tests/assignmentPos_UI.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - UI Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // ==========================================
  // POSITIVE UI TEST CASE
  // ==========================================

  test('Pos_UI_0001: Real-time output updates automatically', async ({ page }) => {
    // 1. Type "ma" slowly (simulate real user typing)
    await page.locator('textarea').first().pressSequentially('ma', { delay: 100 });
    
    // 2. Check partial result (Sinhala 'ම') inside the output div
    // This confirms the UI is reacting while the user types
    await expect(page.locator('div.bg-slate-50')).toContainText('ම');

    // 3. Complete the word "mama"
    await page.locator('textarea').first().pressSequentially('ma', { delay: 100 });
    
    // 4. Check full result (Sinhala 'මම')
    await expect(page.locator('div.bg-slate-50')).toContainText('මම');
  });

  // ==========================================
  // NEGATIVE / FUNCTIONAL UI TEST CASE
  // ==========================================

  test('Neg_UI_0001: Clear Button Functionality', async ({ page }) => {
    // 1. Enter some text into the input field
    await page.locator('textarea').first().fill('This text should be deleted');
    
    // 2. Ensure text is actually there
    await expect(page.locator('textarea').first()).toHaveValue('This text should be deleted');

    // 3. Click the "Clear" button
    // We locate the button by its text name "Clear" and click the first one found
    await page.getByRole('button', { name: 'Clear' }).first().click();

    // 4. Verify the input text area is empty (Negative check: Data should be gone)
    await expect(page.locator('textarea').first()).toBeEmpty();
  });

});