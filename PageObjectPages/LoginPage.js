class LoginPage
{
constructor(page)
{
this.page = page;
this.USER = page.getByPlaceholder('you@email.com');
this.PASSWORD = page.getByLabel('Password');
this.SUBMIT = page.locator('#login-btn')

}

async GoToUrl(BASE_URL)
{
//this.page.goto(`${BASE_URL}/login`);
await this.page.goto(`${BASE_URL}/login`);
}

async loginTest(USER_EMAIL,USER_PASSWORD)
{
  await this.USER.fill(USER_EMAIL);
  await this.PASSWORD.fill(USER_PASSWORD);
  await this.SUBMIT.click(); 
  await this.page.waitForLoadState('networkidle');
}

}

module.exports = {LoginPage}