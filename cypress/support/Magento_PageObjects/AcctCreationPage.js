

class AcctCreationPage {

    constructor() {
        this.createacct_link = "Create an Account"
        this.firstname = "[id='firstname']"
        this.lastname = "[id='lastname']"
        this.email = "[id='email_address']"
        this.password = "[id='password']"
        this.confirmpassword = "[id='password-confirmation']"
        this.createacct_btn = "button[title='Create an Account'] span"
        this.acctcreationtext = "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']"
        this.accountconfirmmsg = "Thank you for registering with Main Website Store." 
        this.signoutdropdown = "div[class='panel header'] button[class='action switch']"  
        this.singout_btn = "div[aria-hidden='false'] li[data-label='or'] a"     
    }

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
        cy.get(this.acctcreationtext).then(function (textele) {
            const confText = textele.text()
            expect(confText).to.equal( "Thank you for registering with Main Website Store.")
        })
    }

    clickSignOut(){
        cy.get(this.signoutdropdown).click();
        cy.get(this.singout_btn).click()
    }

}
export default AcctCreationPage;
