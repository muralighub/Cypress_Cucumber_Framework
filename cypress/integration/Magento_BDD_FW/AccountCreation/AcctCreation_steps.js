import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import AcctCreationPage from "../../../support/Magento_PageObjects/AcctCreationPage"
const acctCreationPage = new AcctCreationPage()

Given('Go to create account page of magento website', function () {
    acctCreationPage.goToAccountCreationPage(Cypress.env('url'))
});


Then('Enter the details for account creation', function () {
    acctCreationPage.enterAccountDetails(this.data.firstname, this.data.lastname, this.data.email, this.data.password, this.data.confirmpassword)
});


Then('Click on create account link', function () {
    acctCreationPage.clickOnCreateAccount()
});

Then('Verify account creation', function () {
    acctCreationPage.confirmAccountCreation()
    acctCreationPage.clickSignOut()
});

