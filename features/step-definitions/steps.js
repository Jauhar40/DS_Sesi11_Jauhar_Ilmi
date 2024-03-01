const { Given, When, Then } = require ('@wdio/cucumber-framework');

const LoginPage = require ('../pageobjects/login.page.js');
const HomePage = require ('../pageobjects/home.page.js');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see home page $/, async () => {
    await HomePage.validateHomePage;
});

Then(/^I should see error (.*)$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage);
});

