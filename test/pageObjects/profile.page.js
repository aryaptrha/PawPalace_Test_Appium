class profilePage{
    get logoutButton() { return $('id:com.andriawan24.pawpalace:id/button_logout') }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }
}
module.exports = new profilePage();