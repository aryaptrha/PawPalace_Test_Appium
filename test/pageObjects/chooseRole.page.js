class chooseRolePage {
    get buttonPetOwner() { return $('xpath://android.widget.Button[@resource-id="com.andriawan24.pawpalace:id/button_sign_in_pet_owner"]') }
    get buttonPetShop() { return $('xpath://android.widget.Button[@resource-id="com.andriawan24.pawpalace:id/button_sign_in_pet_shop"]') }

    async clickButtonPetOwner() {
        await this.buttonPetOwner.click();
    }

    async clickButtonPetShop() {
        await this.buttonPetShop.click();
    }
}

module.exports = new chooseRolePage();