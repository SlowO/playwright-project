//@ts-check
import { Register } from '../niche/models/register.mjs';
import { test, expect } from '@playwright/test';

test.describe('register form feature', () => {

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