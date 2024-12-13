
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../../support/Magento_PageObjects/LoginPage"
const loginPage = new LoginPage()

Given('Go to the homepage of magento website', function () {
    loginPage.goToHomePage(Cypress.env('url'))    
});

When('Click on the singin link', function () {
    loginPage.clickOnSignInLink()
});

Then('Enter username and password', function () {
    loginPage.enterLoginDetails(this.data.email,this.data.password)
});

Then('Click on singin button', function () {

    loginPage.clickOnSignInButton()
});

Then('Verify user is signed into magento', function () {
    loginPage.confirmUserLoggedIn();
    loginPage.clickSignOut()
});