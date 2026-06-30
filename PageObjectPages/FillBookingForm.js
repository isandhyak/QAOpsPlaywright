import { test, expect } from '@playwright/test';
class FillBookingForm
{
    constructor(page)
    {
        this.page = page;
        this.ticketCount = page.locator('#ticket-count');
        this.FName = this.page.getByLabel('Full Name');
        this.custemail = page.locator('#customer-email');
        this.custmobile = page.getByPlaceholder('+91 98765 43210');
        this.confirmB = page.locator('.confirm-booking-btn');
        this.bookingRefEl = page.locator('.booking-ref').first();

    }

    async fillBForm(EVENTTITLE)
    {
                // ── Step 4: Fill the booking form ────────────────────────────────────────

        // Quantity defaults to 1 — verify via id
      // await expect(this.page.getByText('1').first()).toBeVisible();
        await expect(this.ticketCount).toHaveText('1');

        // Located by label
        await this.FName.fill('Test Student');

        // Located by id
        await this.custemail.fill('test.student@example.com');

        // Located by placeholder
        await this.custmobile.fill('9876543210');

        // Located by CSS class
        await this.confirmB.click();
        // ── Step 5: Verify booking confirmation ──────────────────────────────────

        // Located by CSS class
        
        await expect(this.bookingRefEl).toBeVisible();

        const bookingRef = (await this.bookingRefEl.innerText()).trim();
        expect(bookingRef.charAt(0)).toBe(EVENTTITLE.trim().charAt(0).toUpperCase());
        return bookingRef;
        console.log(`Booking confirmed. Ref: ${bookingRef}`);

    }
}
module.exports = {FillBookingForm}