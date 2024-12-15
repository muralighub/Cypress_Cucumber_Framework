

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
        cy.contains(this.createacct_link).click()         
    }

    enterAccountDetails(firstname, lastname, email, password, confpassword) {
        cy.get(this.firstname).type(firstname)
        cy.get(this.lastname).type(lastname)
        cy.get(this.email).type(email)
        cy.get(this.password).type(password)
        cy.get(this.confirmpassword).type(confpassword)
    }

    clickOnCreateAccount() {
        cy.get(this.createacct_btn).click()
    }

    confirmAccountCreation() { 
        cy.get(this.acctCreation_Locators.acctcreationtext).should('have.text', this.acctCreation_Locators.accountconfirmmsg);        
    }

    clickSignOut(){
        cy.get(this.signoutdropdown).click();
        cy.get(this.singout_btn).click()
    }

}
export default AcctCreationPage;
