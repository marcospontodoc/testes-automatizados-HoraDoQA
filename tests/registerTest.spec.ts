import {expect, test} from '@playwright/test';
import {RegisterPage} from '../pages/RegisterPage';

test.describe('Register Tests', () => {
    let registerPage: RegisterPage;

    test.beforeEach(async ({page}) => {
        registerPage = new RegisterPage(page);
        await registerPage.goToRegisterPage();
    });

    test('Cadastro com nome vazio', async ({page}) => {
        await registerPage.register('', 'usuario@teste.com', 'senha123', 'senha123');
        expect(await registerPage.isNameRequired()).toBe(true);
    });

    test('Cadastro com dados válidos', async ({page}) => {
        await registerPage.register('Usuario Teste', 'usuario@teste.com', 'senha123', 'senha123');
        await expect(registerPage.warningMessage).toHaveText('Cadastro realizado com sucesso!');
    });

    test('Cadastro com e-mail inválido', async ({page}) => {
        await registerPage.register('Usuario Teste', 'emailinvalido', 'senha123', 'senha123');
        expect(await registerPage.isEmailInvalid()).toBe(true);
    });

    test('Cadastro com e-mail vazio', async ({page}) => {
        await registerPage.register('Usuario Teste', '', 'senha123', 'senha123');
        expect(await registerPage.isEmailRequired()).toBe(true);
    });

    test('Cadastro com senha inválida', async ({page}) => {
        await registerPage.register('Usuario Teste', 'usuario@teste.com', 'senha', 'senha');
        expect(await registerPage.isPasswordTooShort()).toBe(true);
    });

    test('Cadastro com senha vazia', async ({page}) => {
        await registerPage.register('Usuario Teste', 'usuario@teste.com', '', '');
        expect(await registerPage.isPasswordRequired()).toBe(true);
    });

    test('Cadastro com confirmação de senha diferente', async ({page}) => {
        await registerPage.register('Usuario Teste', 'usuario@teste.com', 'senha123', 'senha456');
        await expect(registerPage.warningMessage).toHaveText(/As senhas não coincidem/);
    });
})