import register from "../models/register.mjs";
import InterestPicker from "../models/interests-picker/interests-picker.mjs";
import CollegePicker from "../models/interests-picker/college-picker.mjs";
import SearchingFor from "../models/interests-picker/searching-for.mjs";

const { test, expect } = require('@playwright/test')

test.describe('register form feature', () => {
    const basePage = new Base(page);
    test.beforeEach(async ({ page }) => {
      await page.goto(basePage.navigate('account/register/'));
    });
  
    test('my test', async ({ page }) => {
      await expect(page).toHaveURL('https://www.niche.com/account/register/');
    });
});