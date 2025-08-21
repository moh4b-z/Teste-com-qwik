# Teste Qwik

Qwik é um framework moderno para construção de aplicações web extremamente rápidas e escaláveis.  
Ele foi projetado para **carregar apenas o necessário**, permitindo páginas que iniciam instantaneamente e escalam muito bem sem comprometer a performance.  

- [Documentação do Qwik](https://qwik.dev/)  
- [Discord da comunidade](https://qwik.dev/chat)  
- [Repositório no GitHub](https://github.com/QwikDev/qwik)  
- [@QwikDev no Twitter/X](https://twitter.com/QwikDev)  
- [Vite (ferramenta de build usada pelo Qwik)](https://vitejs.dev/)  

---

## 🚀 Como instalar e rodar o projeto

### Pré-requisitos
- **Node.js** 18+ (confira com `node -v`)  
- **npm** (vem junto com Node) ou **pnpm/yarn** se preferir  

### Criando um novo projeto Qwik
```bash
npm create qwik@latest
```

Escolha a opção **Qwik City (recomendado)** para começar com suporte a rotas, layouts e demais recursos.  

Depois, entre na pasta do projeto e abra no VS Code:
```bash
cd nome-do-projeto
code .
```

### Instalando dependências
```bash
npm install
```

### Rodando o projeto em modo desenvolvimento
```bash
npm run dev
```

Esse comando:  
- Inicia o **servidor de desenvolvimento**  
- Atualiza automaticamente ao salvar arquivos (`hot reload`)  

Acesse no navegador: 👉 `http://localhost:5173/`

---

## 📂 Estrutura do Projeto

Esse projeto usa o **Qwik com QwikCity**. O QwikCity adiciona ferramentas extras para facilitar a criação de sites completos com **rotas baseadas em diretórios, layouts e muito mais**.  

A estrutura padrão é:  

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Diretório para **rotas baseadas em arquivos**.  
  - Pode conter arquivos `layout.tsx` para layouts hierárquicos.  
  - Arquivos `index.tsx` funcionam como páginas.  
  - Arquivos `index.ts` funcionam como **endpoints**.  
  Veja a doc de [roteamento](https://qwik.dev/qwikcity/routing/overview/).  

- `src/components`: Diretório recomendado para componentes reutilizáveis.  

- `public`: Diretório para arquivos estáticos (imagens, ícones, etc).  
  Veja a doc do [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory).  

---

## ⚙️ Comandos úteis

### 🛠 Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento e observa mudanças no código.  

---

### 🔍 Preview de produção
```bash
npm run preview
```
- Cria um **build de produção**  
- Inicia um servidor local para **pré-visualizar** o build  
> ⚠️ Esse servidor é apenas para testes locais, não deve ser usado em produção.  

---

### 📦 Build de produção
```bash
npm run build
```
- Gera os arquivos otimizados de **cliente e servidor**  
- Usa **TypeScript** para verificar o código  
- Produz a versão que pode ser hospedada em produção  

---

### ➕ Adicionar integrações
```bash
npm run qwik add
```
Executa o **CLI do Qwik** para adicionar integrações ao projeto.  
Exemplos de integrações:  
- **Cloudflare**  
- **Netlify**  
- **Express Server**  
- **Static Site Generator (SSG)**  

---
