import { test, expect } from '@playwright/test';
import { POManager } from '../PageObjectPages/POManager';
import { json } from 'node:stream/consumers';
const dataset = JSON.parse(JSON.stringify(require("../utils/StandAloneTestData.json")));



//const BASE_URL      = 'https://eventhub.rahulshettyacademy.com'
// ── Credentials ────────────────────────────────────────────────────────────────
//const USER_EMAIL    = 'sandhyakarande09@gmail.com';// update email and password with your account
//const USER_PASSWORD = '@Sanndhya00'; 
//const EVENTTITLE = `Test Event ${Date.now()}`;




// ── Test ───────────────────────────────────────────────────────────────────────
test('create event via UI, book it, and verify seat reduction', async ({ page }) => {
  const pomanager = new POManager(page);
  const login = pomanager.getLoginPage();
  await login.GoToUrl(dataset.BASE_URL);
  await login.loginTest(dataset.USER_EMAIL,dataset.USER_PASSWORD);

  const newevent = pomanager.getNewEventCreationPage();
  await newevent.GoToCreteEvent(dataset.BASE_URL);
  await newevent.AddEvent(dataset.EVENTTITLE);

  const eventcheck = pomanager.getFindNewCardPage();
  await eventcheck.GOTOEvent(dataset.BASE_URL);
  await eventcheck.CheckNewEvent(dataset.EVENTTITLE);

  const fillbf = pomanager.getFillBookingFormPage();
  const bookingRef = await fillbf.fillBForm(dataset.EVENTTITLE);

  const vB = pomanager.getVerifyBookingPage();
  await vB.GOTOVerify(dataset.BASE_URL);
  await vB.VerifyBookingA(dataset.EVENTTITLE, bookingRef);
  page.pause();
});
