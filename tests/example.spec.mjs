//@ts-check
import { Register } from '../niche/models/register.mjs';
import { test, expect } from '@playwright/test';
import { NoEssayScholarship } from '../niche/models/no-essay-scholarship.mjs';
import { InterestsPicker } from '../niche/models/interests-picker/interests-picker.mjs';
import { CurrentEnrollment } from '../niche/models/interests-picker/college-path/current-enrollment.mjs';
import { CollegeConsideration } from '../niche/models/interests-picker/college-path/in-college/college-consideration.mjs';
import { pickerRole } from '../niche/models/interests-picker/pickerRoleData.mjs'

test.describe('Register form', () => {

  test('Select transfer path', async ({ page }) => {
    let register = new Register(page);
    await register.openPage();
    await register.takeCollegeTransferPath();
    const text = await register.getTerminalMessage();
    expect(text).toContain('considering transferring');
  });

  test('Select adult learner college path', async ({ page }) => {
    let register = new Register(page);
    await register.openPage();
    await register.takeAdultCollegePath();
    const text = await register.getTerminalMessage();
    expect(text).toContain('adult learner interested in colleges');
  });
});

test.describe('"No Essay" College Scholarship form', () => {

  test('Select transfer path', async ({ page }) => {
    let scholarship = new NoEssayScholarship(page);
    await scholarship.openPage();
    await scholarship.collegeTransferPath();
    const text = await scholarship.getTerminalMessage();
    expect(text).toContain('considering transferring');
  });

  test('Select adult learner college path', async ({ page }) => {
    let scholarship = new NoEssayScholarship(page);
    await scholarship.openPage();
    await scholarship.adultCollegePath();
    const text = await scholarship.getTerminalMessage();
    expect(text).toContain('adult learner interested in colleges');
  });
});

test.describe('Register form (with custom timeout)', () => {

  test('Considering college path', async ({ page }) => {
    let register = new Register(page);
    await register.openPage();
    let interests = new InterestsPicker(page);
    page.isVisible(interests.college, { timeout: 13000 });
    await page.locator(interests.college).click();
    let current = new CurrentEnrollment(page);
    page.isVisible(current.college, { timeout: 3000 });
    await page.locator(current.college).click();
    let considering = new CollegeConsideration(page);
    await page.locator(considering.neither).click();
    page.isEnabled(considering.neither, { timeout: 1000 });
    const text = await register.getTerminalMessage();
    expect(text).toContain('You are, or soon will be a college student.');
  });

  test.describe('Interests picker with data driven', () => {

    test('Considering college path', async ({ page }) => {
      let register = new Register(page);
      await register.selectPath(pickerRole.highschool);
    })

  })

});