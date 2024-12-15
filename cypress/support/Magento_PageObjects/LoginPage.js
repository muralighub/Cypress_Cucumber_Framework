

class LoginPage {

    login_Locators = {
        signin_link: "div[class='panel header'] li[data-label='or'] a",
        username: "[id='email']",
        password: "[name='login[password]']",
        signin_btn: "[class='action login primary']",
        signin_msg: "div[class='panel header'] span[class='logged-in']",
        signoutdropdown: "div[class='panel header'] button[class='action switch']",  
        singout_btn: "div[aria-hidden='false'] li[data-label='or'] a"
    };

    goToHomePage(url) {
        cy.visit(url)
    }

    clickOnSignInLink() {
        cy.get(this.login_Locators.signin_link).click()
    }

    enterLoginDetails(email, password) {
        cy.get(this.login_Locators.username).type(email)
        cy.get(this.login_Locators.password).type(password)

    }

    clickOnSignInButton() {
        cy.get(this.login_Locators.signin_btn).click()
    }

    confirmUserLoggedIn() {
        cy.get(this.login_Locators.signin_msg).then(function (textele) {
            const confText = textele.text()
            expect(confText).contains("Welcome,")
        })
    }

    clickSignOut(){
        cy.get(this.login_Locators.signoutdropdown).click();
        cy.get(this.login_Locators.singout_btn).click()
    }

}
export default LoginPage;
