Feature: Create an account on magento website

    Scenario: To create an account on magento website after entering the details
        Given Go to create account page of magento website
        Then Enter the details for account creation
        Then Click on create account link
        Then Verify account creation

    Scenario: To log into magento website
        Given Go to the homepage of magento website
        When Click on the singin link
        Then Enter username and password
        Then Click on singin button
        Then Verify user is signed into magento


# npx cypress run --spec cypress/integration/Magento_BDD_FW/*.feature
# node cucumber-html-report.js --- to create Cucumber Html Report that is saved in cucumberReports

# npx cypress run --spec cypress/integration/Magento_BDD_FW/*.feature --reporter mochawesome




