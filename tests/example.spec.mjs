import Base from '../niche/models/base.mjs';
// import Register from "../niche/models/register.mjs";
// import InterestPicker from "../niche/models/interests-picker/interests-picker.mjs";
// import CollegePicker from "../niche/models/interests-picker/college-picker.mjs";
// import SearchingFor from "../niche/models/interests-picker/searching-for.mjs";

import { test, expect } from '@playwright/test';

test.describe('register form feature', () => {
    
    test.beforeEach(async ({ page }) => {
      const basePage = new Base(page);
      await page.goto(`${basePage.baseUrl}account/register/`);
    });
  
    test('my test', async ({ page }) => {
      await expect(page).toHaveURL('https://www.niche.com/account/register/');
    });
});