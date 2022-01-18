import { Register } from '../niche/models/register.mjs';


import { test, expect } from '@playwright/test';

test.describe('register form feature', () => {
    
    test.beforeEach(async ({ page }) => {
      //const basePage = new Base(page);
      await page.goto(`account/register/`);
    });
  
    test('my test', async ({ page }) => {
      await expect(page).toHaveURL('https://www.niche.com/account/register/');
    });
});