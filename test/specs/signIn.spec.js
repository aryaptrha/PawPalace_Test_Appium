const ChooseRolePage = require('../pageObjects/chooseRole.page');
const SignUpPage = require('../pageObjects/signIn.page');
const HomePage = require('../pageObjects/home.page');
const ProfilePage = require('../pageObjects/profile.page');
const{delay} = require('../../helper/delayHelper');

describe('Sign In & Sign Out Test suite', () => {
    // Test: Sign In with valid credentials
    it('Berhasil Sign In dan Sign Out sebagai Pet Owner', async () => {
        await delay(3000);

        await ChooseRolePage.clickButtonPetOwner();
        await SignUpPage.setEmailField('lala@gmail.com');
        await SignUpPage.setPasswordField('qwertyuiop');
        await SignUpPage.clickSignInButton();        
        await HomePage.clickProfileButton();
        await ProfilePage.clickLogoutButton();
    });

    it('Berhasil Sign In dan Sign Out sebagai Pet Shop', async () => {
        await delay(3000);

        await ChooseRolePage.clickButtonPetShop();
        await SignUpPage.setEmailField('aryaputrahaidar@gmail.com');
        await SignUpPage.setPasswordField('87654321');
        await SignUpPage.clickSignInButton();
        await HomePage.clickProfileButton();
        await ProfilePage.clickLogoutButton(); 
    });
});