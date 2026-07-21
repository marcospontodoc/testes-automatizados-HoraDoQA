# 🚀 Automação de Testes - Login e Cadastro Hora do QA

## 📖 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar o fluxo completo de trabalho de um QA, desde a análise da aplicação, levantamento de cenários até a automação dos testes.

A aplicação utilizada foi a página de **Login e Cadastro** disponibilizada pela Hora do QA.

🔗 **Aplicação:** https://horadoqa.github.io/login/index.html

Durante o desenvolvimento foram realizadas as seguintes etapas:

- Levantamento dos cenários de teste;
- Escrita dos casos de teste utilizando BDD;
- Automação dos testes End-to-End utilizando Playwright;
- Organização do projeto utilizando o padrão Page Object Model (POM);
- Containerização da aplicação de testes utilizando Docker;
- Configuração de integração contínua (CI) utilizando GitHub Actions para execução automática dos testes.

---

# 🎯 Objetivo

Validar as funcionalidades de Login e Cadastro através de testes automatizados, garantindo que os principais fluxos positivos e negativos funcionem conforme o esperado.

---

# 🛠 Tecnologias Utilizadas

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Git
- GitHub
- Docker
- GitHub Actions

---

# 📂 Estrutura do Projeto

```
.
├── pages/
│   ├── LoginPage.ts
│   └── RegisterPage.ts
│
├── tests/
│   ├── loginTes.spec.ts
│   └── registerTest.spec.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── Dockerfile
├── playwright.config.ts
├── package.json
└── README.md
```

---

# 📋 Cenários e Casos de Teste

## Login

| ID | Cenário | Status |
|----|----------|--------|
| CT001 | Login com e-mail e senha válidos | ✅ Passou |
| CT002 | Login com e-mail inválido | ✅ Passou |
| CT003 | Login com e-mail vazio | ✅ Passou |
| CT004 | Login com senha vazia | ✅ Passou |
| CT005 | Login com senha inválida | ✅ Passou |

### CT001 – Login com sucesso

**BDD**

```gherkin
Dado que o usuário esteja na tela de login
Quando digitar um e-mail e senha válidos
E clicar no botão Entrar
Então o login deve ser realizado com sucesso
E o usuário deve ser redirecionado para a página Welcome.
```

**Resultado Esperado**

- Login realizado com sucesso.
- Redirecionamento para a página Welcome.

---

### CT002 – Login com e-mail inválido

```gherkin
Dado que o usuário esteja na tela de login
Quando informar um e-mail não cadastrado
E clicar em Entrar
Então o login não deve ser realizado
E o sistema deve exibir a mensagem
"E-mail ou senha inválidos!"
```

---

### CT003 – Login com e-mail vazio

```gherkin
Dado que o usuário esteja na tela de login
Quando deixar o campo e-mail vazio
E clicar em Entrar
Então o login não deve ser realizado
E o sistema deve exibir a mensagem
"E-mail e senha são obrigatórios!"
```

---

### CT004 – Login com senha vazia

```gherkin
Dado que o usuário esteja na tela de login
Quando deixar o campo senha vazio
E clicar em Entrar
Então o login não deve ser realizado
E o sistema deve exibir a mensagem
"E-mail e senha são obrigatórios!"
```

---

### CT005 – Login com senha inválida

```gherkin
Dado que o usuário esteja na tela de login
Quando informar uma senha inválida
E clicar em Entrar
Então o login não deve ser realizado
E o sistema deve exibir a mensagem
"E-mail ou senha inválidos!"
```

---

# Cadastro

| ID | Cenário | Status |
|----|----------|--------|
| CT006 | Cadastro válido | ✅ Passou |
| CT007 | Cadastro com e-mail vazio | ✅ Passou |
| CT008 | Cadastro com e-mail inválido | ✅ Passou |
| CT009 | Cadastro com senha vazia | ✅ Passou |
| CT010 | Cadastro com senha menor que 8 caracteres | ✅ Passou |
| CT011 | Cadastro com nome vazio | ✅ Passou |
| CT012 | Cadastro com senhas diferentes | ✅ Passou |

---

### CT006 – Cadastro válido

```gherkin
Dado que o usuário esteja na tela de cadastro
Quando informar nome, e-mail e senha válidos
E clicar em Criar Conta
Então o cadastro deve ser realizado com sucesso.
```

---

### CT007 – Cadastro com e-mail vazio

```gherkin
Dado que o usuário esteja na tela de cadastro
Quando deixar o campo e-mail vazio
E clicar em Criar Conta
Então o cadastro não deve ser realizado
E o sistema deve solicitar o preenchimento do campo.
```

---

### CT008 – Cadastro com e-mail inválido

```gherkin
Dado que o usuário esteja na tela de cadastro
Quando informar um e-mail inválido
E clicar em Criar Conta
Então o sistema deve apresentar erro de formato.
```

---

### CT009 – Cadastro com senha vazia

```gherkin
Dado que o usuário esteja na tela de cadastro
Quando deixar o campo senha vazio
E clicar em Criar Conta
Então o sistema deve solicitar o preenchimento da senha.
```

---

### CT010 – Cadastro com senha inválida

```gherkin
Dado que o usuário esteja na tela de cadastro
Quando informar uma senha com menos de 8 caracteres
E clicar em Criar Conta
Então o sistema deve informar que a senha possui quantidade insuficiente de caracteres.
```

---

### CT011 – Cadastro com nome vazio

```gherkin
Dado que o usuário esteja na tela de cadastro
Quando deixar o campo nome vazio
E clicar em Criar Conta
Então o sistema deve exibir a mensagem
"Preencha este campo".
```

---

### CT012 – Cadastro com senhas diferentes

```gherkin
Dado que o usuário esteja na tela de cadastro
Quando informar senhas diferentes
E clicar em Criar Conta
Então o sistema deve exibir a mensagem
"As senhas não coincidem."
```

---

# 🤖 Automação dos Testes

Todos os cenários foram automatizados utilizando **Playwright**.

Durante a automação foram aplicadas boas práticas como:

- Page Object Model (POM);
- Reutilização de métodos;
- Separação entre testes e elementos da página;
- Assertions utilizando Playwright;
- Código organizado e de fácil manutenção.

---

# 🐳 Docker

Foi criado um **Dockerfile** para padronizar o ambiente de execução dos testes, permitindo que qualquer pessoa execute o projeto sem necessidade de configurar manualmente todas as dependências.

### Construindo a imagem

```bash
docker build -t playwright-tests .
```

### Executando o container

```bash
docker run playwright-tests
```

---

# 🔄 GitHub Actions

Também foi configurada uma pipeline utilizando **GitHub Actions**.

A cada alteração enviada para o repositório, a pipeline realiza automaticamente:

- Checkout do projeto;
- Instalação das dependências;
- Instalação dos navegadores do Playwright;
- Execução dos testes automatizados;
- Geração dos artefatos de teste (quando configurado).

Isso garante uma execução contínua dos testes e auxilia na identificação rápida de falhas.

---

# ▶ Como Executar

Clone o repositório

```bash
git clone https://github.com/seuusuario/seurepositorio.git
```

Instale as dependências

```bash
npm install
```

Instale os navegadores

```bash
npx playwright install
```

Executar todos os testes

```bash
npx playwright test
```

Executar visualizando o navegador

```bash
npx playwright test --headed
```

Modo Interface

```bash
npx playwright test --ui
```

Modo Debug

```bash
npx playwright test --debug
```

---



# 📈 Resultados

| Funcionalidade | Total |
|---------------|------:|
| Cenários levantados | 12 |
| Casos de teste escritos | 12 |
| Testes automatizados | 12 |
| Testes aprovados | 12 |
| Taxa de sucesso | **100%** ✅ |

---


Estudante de Análise e Desenvolvimento de Sistemas e estagiário em Quality Assurance (QA), com foco em testes manuais, automação de testes, validação de APIs e integração contínua.
