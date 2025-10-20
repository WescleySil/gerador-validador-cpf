# Gerador e Validador de CPF

Este projeto gera e valida números de CPF (Cadastro de Pessoas Físicas) usando JavaScript puro. Ele contém módulos para gerar CPFs válidos e para validar CPFs fornecidos pelo usuário. O layout e o bundling são gerenciados com Webpack.

## Descrição
O aplicativo permite gerar um CPF válido e validar CPFs informados. É uma aplicação frontend simples que pode ser aberta diretamente (`public/index.html`) ou servida via um servidor estático.

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack 4
- Babel
- http-server (para servir arquivos estáticos)

## Estrutura do projeto
- `public/` - arquivos estáticos (HTML, CSS, bundle.js)
- `src/` - código fonte (entry `src/index.js`)
- `modules/` - módulos `GeraCPF.js` e `ValidaCPF.js`
- `webpack.config.js` - configuração do webpack
- `package.json` - scripts e dependências

## Como rodar localmente (desenvolvimento)
1. Instale dependências:

```powershell
npm install
```

2. Gere o bundle com Webpack:

```powershell
npm run build
```

3. Abra `public/index.html` no navegador ou rode um servidor estático:

```powershell
npm run server
```

O comando `npm run server` servirá o site na porta 80. Para servir em outra porta use a flag `-p` do `http-server` ou use `npm run start:prod` (veja abaixo).

## Como rodar com Docker
Este repositório inclui um `Dockerfile` para criar uma imagem leve que serve o conteúdo de `public/` na porta 5000.

1. Build da imagem (no diretório do projeto):

```powershell
docker build -t gerador-validador-cpf .
```

2. Rode o container:

```powershell
docker run -d -p 5000:5000 --name gerador-validador-cpf gerador-validador-cpf
```

3. Abra no navegador: http://localhost:5000

## Scripts úteis
- `npm run build` - cria o bundle usando Webpack
- `npm run server` - serve `public/` na porta 80 (http-server)
- `npm run start:prod` - serve `public/` na porta 5000 (útil para containers/produção)

## Dockerfiles e .dockerignore
- `Dockerfile` - cria uma imagem baseada em Node para construir e depois serve arquivos estáticos usando `http-server` em tempo de execução em uma imagem mais leve.
- `.dockerignore` - ignora node_modules, logs, e arquivos de desenvolvimento.

## Autor
Desenvolvido com carinho por WescleySil.