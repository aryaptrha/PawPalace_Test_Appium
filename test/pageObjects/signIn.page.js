class signInPage {
    get signUpButton() { return $('text=Sign Up') }
    get signInButton() { return $('id:com.andriawan24.pawpalace:id/button_sign_in') }
    get emailField() { return $('id:com.andriawan24.pawpalace:id/edit_text_email') }
    get passwordField() { return $('id:com.andriawan24.pawpalace:id/edit_text_password') }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async setEmailField(email) {
        await this.emailField.setValue(email);
    }

    async setPasswordField(password) {
        await this.passwordField.setValue(password);
    }
}

module.exports = new signInPage();