// tests/assignmentNeg.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - Negative & Robustness Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- Helper Function ---
  // Forces translation by pressing Space and checks if the output contains expected text
  async function checkOutput(page, expectedText) {
    await page.locator('textarea').first().press('Space');
    const outputLocator = page.locator('div.bg-slate-50');
    
    // Ensure output is generated
    await expect(outputLocator).not.toBeEmpty({ timeout: 10000 });
    
    // Check if the output contains the expected result (robust match)
    await expect(outputLocator).toContainText(expectedText);
  }

  // ==========================================
  // NEGATIVE / ROBUSTNESS TEST CASES
  // ==========================================

  test('Neg_Fun_0001: Mixed Good Behavior', async ({ page }) => {
    await page.locator('textarea').first().fill('oyage malli guna yahapath dharuwek.');
    await checkOutput(page, 'ඔයාගේ මල්ලී ගුණ යහපත් දරුවෙක්.');
  });

  test('Neg_Fun_0002: Mixed English Grammar', async ({ page }) => {
    await page.locator('textarea').first().fill('api heta boss meet vemu.');
    await checkOutput(page, 'අපි හෙට Boss මීට් වෙමු.');
  });

  test('Neg_Fun_0003: Math Equation', async ({ page }) => {
    await page.locator('textarea').first().fill('x + y = 10 meya visadhanna.');
    await checkOutput(page, 'x + y = 10 මෙය විසඳන්න.');
  });

  test('Neg_Fun_0004: Number Context', async ({ page }) => {
    await page.locator('textarea').first().fill('apee akkage dhan wayasa avurudhu 20k wenwa');
    await checkOutput(page, 'අපේ අක්කගේ දැන් වයස අවුරුදු 20ක් වෙනවා.');
  });

  test('Neg_Fun_0005: Password/Credentials', async ({ page }) => {
    await page.locator('textarea').first().fill('magee WiFi password eka Vinuja3456');
    await checkOutput(page, 'මගේ WiFi පාස්වර්ඩ් එක Vinuja3456');
  });

  test('Neg_Fun_0006: URL Handling', async ({ page }) => {
    await page.locator('textarea').first().fill('www.hirunews.lk mee web site ekata yanna.');
    await checkOutput(page, 'www.hirunews.lk මේ web site එකට යන්න.');
  });

  test('Neg_Fun_0007: Mixed Language Names', async ({ page }) => {
    await page.locator('textarea').first().fill('api heta Sri Lanka vata yanava.');
    await checkOutput(page, 'අපි හෙට ශ්‍රී ලංකාව වටා යනවා.');
  });

  test('Neg_Fun_0008: Email Address', async ({ page }) => {
    await page.locator('textarea').first().fill('apee mallige email eka charaka@gmail.com');
    await checkOutput(page, 'අපේ මල්ලියේ ඊමේල් එක charaka@gmail.com');
  });

  test('Neg_Fun_0009: Hashtags', async ({ page }) => {
    await page.locator('textarea').first().fill('chathuri comment karala thibunee #Srilanka kiyalaa.');
    await checkOutput(page, 'චතුරි comment කරලා තිබුණේ #SriLanka කියලා.');
  });

  test('Neg_Fun_0010: Missing Spaces (Stress Test)', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaaschoolekatagiyadha?');
    await checkOutput(page, 'ඔයා ස්කූල් එකට ගියාද?');
  });

  test('Neg_Fun_0011:', async ({ page }) => {
    await page.locator('textarea').first().fill('dubai vala daen uShNthvaya 212°F yi');
    await checkOutput(page, 'dubai වල දැන් උෂ්ණත්වය 212°F යි.');
  });

});