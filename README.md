# modulo-29-test-ios
modulo 29 curso ebac test ios com WDIO e Appium
Descrição
Este projeto contém testes automatizados para o aplicativo Loja EBAC, focado em iOS utilizando WebdriverIO e Appium.

Requisitos
Node.js instalado

NPM instalado

Appium instalado globalmente (npm install -g appium)

Simulador iOS configurado no Xcode

Aplicativo Loja EBAC compilado para simulador (arquivo .app)

Configuração
Clone o repositório:
git clone https://github.com/gabrielthiego/modulo-29-test-ios.git
cd modulo-29-test-ios

Instale as dependências:
npm install --legacy-peer-deps (pra mim só funciona assim...)

Configure o caminho do app no arquivo wdio.conf.js:
'appium:app': '/Users/gabri/Library/Developer/Xcode/DerivedData/LojaEBAC-sim.app'
(Altere para o caminho correto do seu .app)

Rodando os testes
Execute:
npx wdio run wdio.conf.js

O WDIO vai abrir o simulador iOS, instalar o app e rodar os testes.

Observações
Se usar Sauce Labs, será necessário configurar as variáveis de ambiente e ajustar o wdio.conf.js.

Testes estão escritos em Mocha.

Timeout padrão de 60 segundos.

Estrutura do projeto
wdio.conf.js - Configuração do WebdriverIO

test/ - Pasta contendo os arquivos de teste (*.test.js)

Contato
Gabriel Thiego Trindade Sperduto
Projeto feito para estudos EBAC

