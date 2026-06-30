import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjectPages/LoginPage';
import { NewEventCreation } from '../PageObjectPages/NewEventCreation';
import { FindNewCard } from '../PageObjectPages/FindNewCard';
import { FillBookingForm } from '../PageObjectPages/FillBookingForm';
import { VerifyBooking } from '../PageObjectPages/VerifyBooking';

const BASE_URL      = 'https://eventhub.rahulshettyacademy.com'
// ── Credentials ────────────────────────────────────────────────────────────────
const USER_EMAIL    = 'sandhyakarande09@gmail.com';// update email and password with your account
const USER_PASSWORD = '@Sanndhya00'; 
 const EVENTTITLE = `Test Event ${Date.now()}`;

//Update************************************************************************************


// ── Test ───────────────────────────────────────────────────────────────────────
test('create event via UI, book it, and verify seat reduction', async ({ page }) => {

  const login =new LoginPage(page);
  await login.GoToUrl(BASE_URL);
  await login.loginTest(USER_EMAIL,USER_PASSWORD);

  const newevent = new NewEventCreation(page);
  await newevent.GoToCreteEvent(BASE_URL);
  await newevent.AddEvent(EVENTTITLE);

  const eventcheck = new FindNewCard(page);
  await eventcheck.GOTOEvent(BASE_URL);
  await eventcheck.CheckNewEvent(EVENTTITLE);

  const fillbf = new FillBookingForm(page);
  const bookingRef = await fillbf.fillBForm(EVENTTITLE);
  const vB = new VerifyBooking(page);
  await vB.GOTOVerify(BASE_URL);
  await vB.VerifyBookingA(EVENTTITLE, bookingRef);
  

  


/*

  // ── Step 6: Verify booking appears in My Bookings ────────────────────────
  await page.getByRole('link', { name: 'View My Bookings' }).click();
  await expect(page).toHaveURL(`${BASE_URL}/bookings`);

  // Located by id
  const bookingCards = page.locator('#booking-card');
  await expect(bookingCards.first()).toBeVisible();

  // Find the card that contains our booking ref (via CSS class inside the card)
  const matchingCard = bookingCards.filter({ has: page.locator('.booking-ref', { hasText: bookingRef }) });
  await expect(matchingCard).toBeVisible();

  // Verify event title also appears in the same card
  await expect(matchingCard).toContainText(eventTitle);

  console.log(`Booking card found in My Bookings for ref: ${bookingRef}`);

  // ── Step 7: Verify seat count reduced on Events page ─────────────────────
  await page.goto(`${BASE_URL}/events`);
  await expect(eventCards.first()).toBeVisible();

  // Find the same event by title
  const updatedCard       = eventCards.filter({ hasText: eventTitle }).first();
  await expect(updatedCard).toBeVisible();

  const seatsAfterBooking = parseInt(await updatedCard.getByText('seat').first().innerText());
  console.log(`Seats after booking: ${seatsAfterBooking}`);

  // Booked 1 ticket — count must drop by exactly 1
  expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);
  */
 page.pause();
});
