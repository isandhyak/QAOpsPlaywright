import { test, expect } from '@playwright/test';
class VerifyBooking{
    constructor(page)
    {
        this.page =page;
        this.mybookingpage = page.getByRole('link', { name: 'View My Bookings' });
        this.bookingCards = page.locator('#booking-card');
    }

    async GOTOVerify(BASE_URL)
    {
    await this.mybookingpage.click();
    await expect(this.page).toHaveURL(`${BASE_URL}/bookings`);
    }

    async VerifyBookingA(EVENTTITLE,bookingRef)
    {
            // ── Step 6: Verify booking appears in My Bookings ────────────────────────
  

    // Located by id
   
    await expect(this.bookingCards.first()).toBeVisible();

    // Find the card that contains our booking ref (via CSS class inside the card)
    const matchingCard = this.bookingCards.filter({ has: this.page.locator('.booking-ref', { hasText: bookingRef }) });
    await expect(matchingCard).toBeVisible();

    // Verify event title also appears in the same card
    await expect(matchingCard).toContainText(EVENTTITLE);

    console.log(`Booking card found in My Bookings for ref: ${bookingRef}`);
    /*

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

    }
}
module.exports = {VerifyBooking};