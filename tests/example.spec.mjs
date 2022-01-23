//@ts-check
import { Register } from '../niche/models/register.mjs';
import { test, expect } from '@playwright/test';
import { NoEssayScholarship } from '../niche/models/no-essay-scholarship.mjs';

test.describe('Register form', () => {

  test('Select transfer path', async ({ page }) => {
    let register = new Register(page);
    await register.navigate();
    await register.takeCollegeTransferPath();
    const text = await register.getTerminalMessage();
    expect(text).toContain('considering transferring');
  });

  test('Select adult learner college path', async ({ page }) => {
    let register = new Register(page);
    await register.navigate();
    await register.takeAdultCollegePath();
    const text = await register.getTerminalMessage();
    expect(text).toContain('adult learner interested in colleges');
  });
});

test.describe('"No Essay" College Scholarship form', () => {

  test('Select transfer path', async ({ page }) => {
    let scholarship = new NoEssayScholarship(page);
    await scholarship.navigate();
    await scholarship.collegeTransferPath();
    const text = await scholarship.getTerminalMessage();
    expect(text).toContain('considering transferring');
  });

  test('Select adult learner college path', async ({ page }) => {
    let scholarship = new NoEssayScholarship(page);
    await scholarship.navigate();
    await scholarship.adultCollegePath();
    const text = await scholarship.getTerminalMessage();
    expect(text).toContain('adult learner interested in colleges');
  });
});