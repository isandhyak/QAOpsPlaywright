import { test, expect } from '@playwright/test';
class FindNewCard
{

constructor(page)
{
    this.page = page;
    this.eventCards = page.getByTestId('event-card')

}

async GOTOEvent(BASE_URL)
{
await this.page.goto(`${BASE_URL}/events`);

}

async CheckNewEvent(EVENTTITLE)
{
 

 
  await expect(this.eventCards.first()).toBeVisible();

  // Scan all visible event cards for the one matching our created title
  const targetCard = this.eventCards.filter({ hasText: EVENTTITLE }).first();
  await expect(targetCard).toBeVisible({ timeout: 5000 });

  // Capture seat count before booking
  const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
  console.log(`Seats before booking: ${seatsBeforeBooking}`);

  // Located by data-testid inside the matched card
  await targetCard.getByTestId('book-now-btn').click();
    await this.page.waitForLoadState('networkidle');



}


}
module.exports = {FindNewCard};