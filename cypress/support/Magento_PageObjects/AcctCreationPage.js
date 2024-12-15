

class AcctCreationPage {

    acctCreation_Locators = {
        createacct_link: "Create an Account",
        firstname: "[id='firstname']",
        lastname: "[id='lastname']",
        email: "[id='email_address']",
        password: "[id='password']",
        confirmpassword: "[id='password-confirmation']",
        createacct_btn: "button[title='Create an Account'] span",
        acctcreationtext: "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']",
        accountconfirmmsg: "Thank you for registering with Main Website Store.",
        signoutdropdown: "div[class='panel header'] button[class='action switch']",
        singout_btn: "div[aria-hidden='false'] li[data-label='or'] a"
    };

    goToAccountCreationPage(url) {
        cy.visit(url)
        cy.contains(this.acctCreation_Locators.createacct_link).click()
    }

    enterAccountDetails(firstname, lastname, email, password, confpassword) {
        cy.get(this.acctCreation_Locators.firstname).type(firstname)
        cy.get(this.acctCreation_Locators.lastname).type(lastname)
        cy.get(this.acctCreation_Locators.email).type(email)
        cy.get(this.acctCreation_Locators.password).type(password)
        cy.get(this.acctCreation_Locators.confirmpassword).type(confpassword)
    }

    clickOnCreateAccount() {
        cy.get(this.acctCreation_Locators.createacct_btn).click()
    }

    confirmAccountCreation() {
        cy.get(this.acctCreation_Locators.acctcreationtext).should('have.text', this.acctCreation_Locators.accountconfirmmsg);
    }

    clickSignOut() {
        cy.get(this.acctCreation_Locators.signoutdropdown).click();
        cy.get(this.acctCreation_Locators.singout_btn).click()
    }

}
export default AcctCreationPage;
