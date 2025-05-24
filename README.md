# Testes iOS com Appium - Módulo 29

Este projeto é a entrega do Módulo 29 do curso da EBAC (Engenheiro de Qualidade de Software), com testes automatizados em iOS usando WebdriverIO, Appium, Mocha e Sauce Labs.

##  Tecnologias utilizadas

- WebdriverIO  
- Appium  
- Mocha  
- Sauce Labs

##  Estrutura do Projeto

```
.
├── .gitignore
├── package.json
├── wdio.conf.js
└── test
    └── compras.test.js
```

##  Pré-requisitos

- Node.js instalado  
- Conta no Sauce Labs (https://saucelabs.com/)  
- API key e username configurados nas variáveis de ambiente:  
  - `SAUCE_USERNAME`  
  - `SAUCE_ACCESS_KEY`

##  Como rodar os testes

1. Instale as dependências:

```bash
npm install --legacy-peer-deps
```

2. Inicie o Appium localmente ou configure o acesso ao Sauce Labs.  

3. Execute os testes:

```bash
npx wdio run wdio.conf.js
```

##  Observações

- Este projeto usa o aplicativo `lojaebac.ipa` para execução no Sauce Labs.  
- O caminho do app está configurado no arquivo `wdio.conf.js`, dentro da propriedade `appium:app`.  
- Para execução em simulador local, troque para `LojaEBAC-sim.app`.

##  Links úteis e referências

- [Documentação WebdriverIO](https://webdriver.io/docs/gettingstarted/)  
- [Appium - Guia Oficial](https://appium.io/docs/en/about-appium/intro/)  
- [Guia GitHub Readme](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)  
- [Gerador de Readmes](https://www.makeareadme.com/)  
- [Templates de Readme](https://github.com/dbader/readme-template)

---

Gabriel Thiego Trindade Sperduto  
Entrega: 22/05/2025