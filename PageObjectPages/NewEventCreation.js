import { test, expect } from '@playwright/test';
class NewEventCreation
{
    constructor(page)
    {
        this.page=page;
        this.FEventTitle = page.locator('#event-title-input');
        this.FEventDescription = page.locator('#admin-event-form textarea');
        this.FCity = page.getByLabel('City');
        this.FVenue = page.getByLabel('Venue');
        this.FEventDate = page.getByLabel('Event Date & Time');
        this.FPrice = page.getByLabel('Price ($)');
        this.FTotalSeats = page.getByLabel('Total Seats');
        this.FAddEventbtn = page.locator('#add-event-btn');
        this.FToast = page.getByText('Event created!');

    }

    async GoToCreteEvent(BASE_URL)
    {
        // ── Step 2: Create a new event via the admin form ────────────────────────
         await this.page.goto(`${BASE_URL}/admin/events`);
    }
   async  AddEvent(EVENTTITLE)
    {
         // Unique title so we can find this exact card later
        const eventTitle = `Test Event ${Date.now()}`;

        // Located by id (explicit on the component)
        await this.FEventTitle.fill(EVENTTITLE);

        // Description — only textarea in the form
        await this.FEventDescription.fill('Playwright test event');

        // Located by label (Select auto-generates id from label text)
        await this.FCity.fill('Test City');
        await this.FVenue.fill('Test Venue');

        // datetime-local input — located by label
        await this.FEventDate.fill('2027-12-31T10:00');

        await this.FPrice.fill('100');
        await this.FTotalSeats.fill('50');

        // Located by id
        await this.FAddEventbtn.click();

        // Wait for success toast
        await expect(this.FToast).toBeVisible();

        console.log(`Created event: "${EVENTTITLE}"`);
    }

}
module.exports = {NewEventCreation};


  

 