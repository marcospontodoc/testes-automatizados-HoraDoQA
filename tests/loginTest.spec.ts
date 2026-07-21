import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
test.describe('Login Tests', () => {
    let loginPage: LoginPage; 

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
    });

    test('Login com e-mail e senha válidos', async ({page}) => {
        await loginPage.login('usuario@example.com', '1q2w3e4r');
        await expect(page).toHaveURL('https://horadoqa.github.io/login/pages/welcome.html');
    });

    test('Login com e-mail inválido', async ({page}) => {
        await loginPage.login('emailinvalido@example.com', '1q2w3e4r');
        await expect(loginPage.warningMessage).toHaveText(/E-mail ou senha inválidos!/);
    });

    test('Login com senha inválida', async ({page}) => {
        await loginPage.login('usuario@example.com', 'senhainvalida');
        await expect(loginPage.warningMessage).toHaveText(/E-mail ou senha inválidos!/);
    });

    test('Login com e-mail vazio', async ({page}) => {
        await loginPage.login('', '1q2w3e4r');
        await expect(loginPage.warningMessage).toHaveText(/E-mail e senha são obrigatórios!/);
    });
    
    test('Login com senha vazia', async ({page}) => {
        await loginPage.login('usuario@example.com', '');
        await expect(loginPage.warningMessage).toHaveText(/E-mail e senha são obrigatórios!/);
    });

});