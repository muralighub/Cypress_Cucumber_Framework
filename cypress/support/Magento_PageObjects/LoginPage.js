

class LoginPage {

    constructor() {
        this.signin_link = "div[class='panel header'] li[data-label='or'] a"
        this.username = "[id='email']"
        this.password = "[name='login[password]']"
        this.signin_btn = "[class='action login primary']"
        this.signin_msg = "div[class='panel header'] span[class='logged-in']"
        this.signoutdropdown = "div[class='panel header'] button[class='action switch']"  
        this.singout_btn = "div[aria-hidden='false'] li[data-label='or'] a"
    }

    goToHomePage(url) {
        cy.visit(url)
    }

    clickOnSignInLink() {
        cy.get(this.signin_link).click()
    }

    enterLoginDetails(email, password) {
        cy.get(this.username).type(email)
        cy.get(this.password).type(password)

    }

    clickOnSignInButton() {
        cy.get(this.signin_btn).click()
    }

    confirmUserLoggedIn() {
        cy.get(this.signin_msg).then(function (textele) {
            const confText = textele.text()
            expect(confText).contains("Welcome,")
        })
    }

    clickSignOut(){
        cy.get(this.signoutdropdown).click();
        cy.get(this.singout_btn).click()
    }

}
export default LoginPage;
