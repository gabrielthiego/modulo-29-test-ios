# Testes iOS com Appium - Módulo 29 e 30

Este projeto contém as entregas dos **Módulos 29 e 30** do curso da EBAC (Engenheiro de Qualidade de Software), com testes automatizados em iOS usando WebdriverIO, Appium, Mocha, BrowserStack e GitHub Actions.

## Tecnologias utilizadas

* WebdriverIO
* Appium
* Mocha
* BrowserStack
* GitHub Actions

## Estrutura do Projeto

```
.
├── .github
│   └── workflows
│       └── ci.yml
├── node_modules
├── package.json
├── wdio.config.js
└── test
    └── compras.test.js
```

## Pré-requisitos

* Node.js instalado
* Conta no BrowserStack ([https://browserstack.com/](https://browserstack.com/))
* API Key e Username configurados como **Secrets** no GitHub:

  * `BROWSERSTACK_USERNAME`
  * `BROWSERSTACK_ACCESS_KEY`

## Como rodar os testes

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes localmente (opcional, com as variáveis de ambiente configuradas):

```bash
npx wdio run wdio.config.js
```

3. Ou suba um commit na branch `ci` para disparar os testes via GitHub Actions.

## Observações

* O app testado é o `lojaebac.ipa`, hospedado no BrowserStack.
* O caminho do app está configurado em `wdio.config.js`, na propriedade `appium:app`.
* O vídeo gerado na execução via BrowserStack pode ser acessado diretamente pelo painel deles, mas pode apresentar problemas visuais na tela do app (bug conhecido da plataforma).

## Link do repositório com execução CI

* [GitHub Actions - Execução dos testes](https://github.com/gabrielthiego/modulo-29-test-ios/actions)

---

Gabriel Thiego Trindade Sperduto
Entrega: **Módulos 29 e 30 - Testes automatizados e integração com CI/CD**
