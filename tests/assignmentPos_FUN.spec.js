// tests/assignment.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - Final Verified Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- Helper Function (Robust) ---
  // This uses the Space key to force translation and checks the output div
async function checkOutput(page, expectedText) {
    // Small wait to let the site register the "fill" action
    await page.waitForTimeout(500); 
    // Force translation by pressing Space
    await page.locator('textarea').first().press('Space');
    
    const outputLocator = page.locator('div.bg-slate-50');
    // Increase the timeout for the specific text match
    await expect(outputLocator).toContainText(expectedText, { timeout: 20000 });
  }
  // ==========================================
  // 1. POSITIVE FUNCTIONAL TESTS (Your New List)
  // ==========================================

  test('Pos_Fun_0001: Simple Sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('akkaa potha kiyavanavaa.');
    await checkOutput(page, 'අක්කා පොත කියවනවා.');
  });

  test('Pos_Fun_0002: Compound Sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('ammayi thaaththayi kadee yanavaa vageema baduth gannavaa.');
    await checkOutput(page, 'අම්මයි තාත්තයි කඩේ යනවා වගේම බඩුත් ගන්නවා.');
  });

  test('Pos_Fun_0003: Complex Sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaa heta enakan mama methana balan innavaa.');
    await checkOutput(page, 'ඔයා හෙට එනකන් මම මෙතන බලන් ඉන්නවා.');
  });

  test('Pos_Fun_0004: Question Form', async ({ page }) => {
    await page.locator('textarea').first().fill('api adha raeeta monavadha uyanne?');
    await checkOutput(page, 'අපි අද රෑට මොනවද උයන්නෙ?');
  });

  test('Pos_Fun_0005: Imperative/Command', async ({ page }) => {
    await page.locator('textarea').first().fill('karunaakaralaa dhorata thattu karanna epaa.');
    await checkOutput(page, 'කරුනාකරලා දොරට තට්ටු කරන්න එපා.');
  });

  test('Pos_Fun_0006: Negative Sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('mata kaeema genna mathaka naee.');
    await checkOutput(page, 'මට කෑම ගෙන්න මතක නෑ.');
  });

  test('Pos_Fun_0007: Past Tense (Place)', async ({ page }) => {
    await page.locator('textarea').first().fill('api giya maase gaallee giyaa.');
    await checkOutput(page, 'අපි ගිය මාසෙ ගාල්ලේ ගියා.');
  });

  test('Pos_Fun_0008: Future Tense', async ({ page }) => {
    await page.locator('textarea').first().fill('ayiyaa heta pansal yaavi.');
    await checkOutput(page, 'අයියා හෙට පන්සල් යාවි.');
  });

  test('Pos_Fun_0009: Plural Form', async ({ page }) => {
    await page.locator('textarea').first().fill('Lamayi iskolee sellam karanavaa.');
    await checkOutput(page, 'ළමයි ඉස්කොලේ සෙල්ලම් කරනවා.');
  });

  test('Pos_Fun_0010: Request', async ({ page }) => {
    await page.locator('textarea').first().fill('puluvannam mata thaeegga dhenna.');
    await checkOutput(page, 'පුලුවන්නම් මට තෑග්ග දෙන්න.');
  });

  test('Pos_Fun_0011: Singular Form', async ({ page }) => {
    await page.locator('textarea').first().fill('mama aluth laptop ekak gaththaa.');
    await checkOutput(page, 'මම අලුත් laptop එකක් ගත්තා.');
  });

  test('Pos_Fun_0012: Brand Name', async ({ page }) => {
    await page.locator('textarea').first().fill('mama Facebook ekee post ekak dhaemmaa.');
    await checkOutput(page, 'මම Facebook එකේ post එකක් දැම්මා.');
  });

  test('Pos_Fun_0013: Currency Format', async ({ page }) => {
    await page.locator('textarea').first().fill('meeke mila Rs. 2500 yi.');
    await checkOutput(page, 'මේකෙ මිල Rs. 2500 යි.');
  });

  test('Pos_Fun_0014: Time Format', async ({ page }) => {
    await page.locator('textarea').first().fill('api 8.00 AM ta hamuvemu.');
    await checkOutput(page, 'අපි 8.00 AM ට හමුවෙමු.');
  });

  test('Pos_Fun_0015: Date Format', async ({ page }) => {
    await page.locator('textarea').first().fill('upan dhinaya 1999-05-12 venidhaa.');
    await checkOutput(page, 'උපන් දිනය 1999-05-12 වෙනිදා.');
  });

  test('Pos_Fun_0016: Multiple Spaces', async ({ page }) => {
    await page.locator('textarea').first().fill('gamata             yanna            parissamen.');
    // Check partial text because newlines/spaces can vary slightly in HTML
    await checkOutput(page, 'ගමට යන්න');
    await checkOutput(page, 'පරිස්සමෙන්.');
  });

  test('Pos_Fun_0017: Slang Expression', async ({ page }) => {
    await page.locator('textarea').first().fill('adoo patta kathaava eeka machan.');
    await checkOutput(page, 'අඩෝ පට්ට කතාව ඒක මචන්.');
  });

  test('Pos_Fun_0018: Long Paragraph', async ({ page }) => {
    const input = 'dubai vala ithihaasaya bohomath puraanaya. Saman kumaru paeminiimata pera sitama helayoo methana vaasaya karaa sahaa raavanaa rajuthuma gaena thiyena kathaa vasthuva vishvaasa karanna puluvan. Mee kaale thiyena technology eka ekka baladhdhi apita godak dheeval hoyaganna puluvan velaa thiyenavaa. Mee rata lassanayi vageema minisun hari  hodhayi. Api haemooma ekathu velaa rata hadhanna oona.';
    await page.locator('textarea').first().fill(input);
    // Check start and end to verify full translation
    await checkOutput(page, 'dubai වල ඉතිහාසය බොහොමත් පුරානය. සමන් කුමරු පැමිනීමට පෙර සිටම හෙලයෝ මෙතන වාසය කරා සහා රාවනා රජුතුම ගැන තියෙන කතා වස්තුව විශ්වාස කරන්න පුලුවන්. මේ කාලෙ තියෙන technology එක එක්ක බලද්දි අපිට ගොඩක් දේවල් හොයගන්න පුලුවන් වෙලා තියෙනවා. මේ රට ලස්සනයි වගේම මිනිසුන් හරි  හොදයි. අපි හැමෝම එකතු වෙලා රට හදන්න ඕන.');
    
  });

  test('Pos_Fun_0019: Daily Need', async ({ page }) => {
    await page.locator('textarea').first().fill('mata bada giniyi.');
    await checkOutput(page, 'මට බඩ ගිනියි.');
  });

  test('Pos_Fun_0020: Phrase Pattern', async ({ page }) => {
    await page.locator('textarea').first().fill('api haemooma ekata ekathu velaa vaeda.');
    await checkOutput(page, 'අපි හැමෝම එකට එකතු වෙලා වැඩ.');
  });

  test('Pos_Fun_0021: English Abbreviation', async ({ page }) => {
    await page.locator('textarea').first().fill('eyaa oyaage ID eka evanna kivvaa.');
    await checkOutput(page, 'එයා ඔයාගෙ ID එක එවන්න කිව්වා.');
  });

  test('Pos_Fun_0022: Punctuation', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaa mokadha karanne? kiyanna!');
    await checkOutput(page, 'ඔයා මොකද කරන්නේ? කියන්න!');
  });

  test('Pos_Fun_0023: Repetition', async ({ page }) => {
    await page.locator('textarea').first().fill('himin himin yanna.');
    await checkOutput(page, 'හිමින් හිමින් යන්න.');
  });

  test('Pos_Fun_0024: Greeting', async ({ page }) => {
    await page.locator('textarea').first().fill('Suba raathriyak!');
    await checkOutput(page, 'සුබ රාත්‍රියක්!');
  });

  test('Pos_Fun_0025: Confirmation', async ({ page }) => {
    await page.locator('textarea').first().fill('Ov, eekanam vaeradhiyi.');
    await checkOutput(page, 'ඔව්, ඒකනම් වැරදියි.');
  });

  test('Pos_Fun_0026: Idiom/Question', async ({ page }) => {
    await page.locator('textarea').first().fill('eyaa koyi lookedha inne?');
    await checkOutput(page, 'එයා කොයි ලෝකෙද ඉන්නේ?');
  });

  test('Pos_Fun_0027: Future Day', async ({ page }) => {
    await page.locator('textarea').first().fill('anidhdhaa vahinavaa.');
    await checkOutput(page, 'අනිද්දා වහිනවා.');
  });

  test('Pos_Fun_0028: Food Item', async ({ page }) => {
    await page.locator('textarea').first().fill('api aappa kamu.');
    await checkOutput(page, 'අපි ආප්ප කමු.');
  });

  test('Pos_Fun_0029: Thanks', async ({ page }) => {
    await page.locator('textarea').first().fill('akkaata godaak sthuthiyi.');
    await checkOutput(page, 'අක්කාට ගොඩාක් ස්තුතියි.');
  });

  test('Pos_Fun_0030: Weight Unit', async ({ page }) => {
    await page.locator('textarea').first().fill('siini 1kg k ganna.');
    await checkOutput(page, 'සීනි 1kg ක් ගන්න.');
  });

  

});