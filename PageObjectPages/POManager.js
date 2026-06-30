import { LoginPage } from '../PageObjectPages/LoginPage';
import { NewEventCreation } from '../PageObjectPages/NewEventCreation';
import { FindNewCard } from '../PageObjectPages/FindNewCard';
import { FillBookingForm } from '../PageObjectPages/FillBookingForm';
import { VerifyBooking } from '../PageObjectPages/VerifyBooking';
class POManager
{
    constructor(page)
    {
    this.page = page;
    this.login =new LoginPage(this.page);
    this.newevent = new NewEventCreation(this.page);
    this.eventcheck = new FindNewCard(this.page);
    this.fillbf = new FillBookingForm(this.page);
    this.vB = new VerifyBooking(this.page);  
    }
getLoginPage()
{
    return this.login;
}

getNewEventCreationPage()
{
    return this.newevent;
}

getFindNewCardPage()
{
    return this.eventcheck;
}

getFillBookingFormPage()
{
    return this.fillbf;
}

getVerifyBookingPage()
{
    return this.vB;
}

}
module.exports = {POManager};