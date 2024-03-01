const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const errorLockedOutUser = (dynamicMessage) => $('//h3[text()="${dynamicMessage}"]')

class LoginPage extends Page {
    // NOTE: elements collection
    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    

    async login (username, password) {
        await this.fieldUsername.waitForDisplayed({ timeout: 10000 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError (dynamicMessage) {
        await errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 10000 });
        await expect(errorLockedOutUser(dynamicMessage)).toBeDisplayed();
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();