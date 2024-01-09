class homePage {
    //Navigation Bar
    get homeButton() { return $('xpath:(//android.widget.ImageView[@resource-id="com.andriawan24.pawpalace:id/navigation_bar_item_icon_view"])[1]')}
    get chatButton() { return $('xpath:(//android.widget.ImageView[@resource-id="com.andriawan24.pawpalace:id/navigation_bar_item_icon_view"])[2]')}
    get historyButton() { return $('xpath:(//android.widget.ImageView[@resource-id="com.andriawan24.pawpalace:id/navigation_bar_item_icon_view"])[3]')}
    get profileButton() { return $('xpath:(//android.widget.ImageView[@resource-id="com.andriawan24.pawpalace:id/navigation_bar_item_icon_view"])[4]')}

    //Booking
    get detailPetShopButton() { return $('xpath:(//android.widget.Button[@resource-id="com.andriawan24.pawpalace:id/button_detail"])[1]')}
    get bookingButton() { return $('xpath://android.widget.Button[@resource-id="com.andriawan24.pawpalace:id/button_booking"]')}
    get startDateField() { return $('xpath://android.widget.EditText[@resource-id="com.andriawan24.pawpalace:id/edit_text_start_date"]')}
    get endDateField() { return $('xpath://android.widget.EditText[@resource-id="com.andriawan24.pawpalace:id/edit_text_end_date"]')}
    get descriptionField() { return $('xpath://android.widget.EditText[@resource-id="com.andriawan24.pawpalace:id/edit_text_description"]')}
    get bookNowButton() { return $('xpath://android.widget.Button[@resource-id="com.andriawan24.pawpalace:id/button_save"]')}
    get cancelButton() { return $('xpath://android.widget.Button[@resource-id="com.andriawan24.pawpalace:id/button_cancel"]')}

    async clickHomeButton() {
        await this.homeButton.click();
    }

    async clickChatButton() {
        await this.chatButton.click();
    }

    async clickHistoryButton() {
        await this.historyButton.click();
    }

    async clickProfileButton() {
        await this.profileButton.click();
    }

    async clickDetailPetShopButton() {
        await this.detailPetShopButton.click();
    }

    async clickBookingButton() {
        await this.bookingButton.click();
    }

    async setStartDateField(startDate) {
        await this.startDateField.setValue(startDate);
    }

    async setEndDateField(endDate) {
        await this.endDateField.setValue(endDate);
    }

    async setDescriptionField(description) {
        await this.descriptionField.setValue(description);
    }

    async clickBookNowButton() {
        await this.bookNowButton.click();
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }
}

module.exports = new homePage();