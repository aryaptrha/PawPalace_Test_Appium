const ChooseRolePage = require('../pageObjects/chooseRole.page');
const SignUpPage = require('../pageObjects/signIn.page');
const HomePage = require('../pageObjects/home.page');
const ProfilePage = require('../pageObjects/profile.page');
const{delay} = require('../../helper/delayHelper');

describe('Booking suite', () => {
    // Test: Sign In with valid credentials
    it('Berhasil Booking', async () => {
        await delay(3000);
        
        //Login
        await ChooseRolePage.clickButtonPetOwner();
        await SignUpPage.setEmailField('lala@gmail.com');
        await SignUpPage.setPasswordField('qwertyuiop');
        await SignUpPage.clickSignInButton();  

        //Booking
        await HomePage.clickDetailPetShopButton();
        await HomePage.clickBookingButton();
        await HomePage.setStartDateField('2021-07-01');
        await HomePage.setEndDateField('2021-07-02');
        await HomePage.setDescriptionField('Booking Macan 1');
        await HomePage.clickBookNowButton();

        // //Logout
        // await HomePage.clickProfileButton();
        // await ProfilePage.clickLogoutButton();
    });
});