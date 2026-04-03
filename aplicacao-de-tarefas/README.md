# 📝 Aplicação de Gerenciamento de Tarefas (To-Do List)

## 📌 Descrição

Esta é uma aplicação desenvolvida em **React** para gerenciamento de tarefas (To-Do List). O projeto permite ao usuário **adicionar, visualizar, editar e excluir tarefas**, utilizando conceitos modernos do React como **Hooks**, **Context API** e **React Router**.

As tarefas são persistidas no navegador por meio do **localStorage**, garantindo que os dados não sejam perdidos ao recarregar a página.

---

## 🚀 Funcionalidades

* ✅ Adicionar novas tarefas
* 📋 Listar todas as tarefas
* ✏️ Editar tarefas existentes
* ❌ Excluir tarefas
* 💾 Persistência com localStorage
* 🔀 Navegação entre páginas com React Router

---

## 🛠️ Tecnologias Utilizadas

* React
* React Router DOM
* Context API
* Hooks (useState, useEffect, useContext)
* JavaScript (ES6+)
* CSS

---

## 📁 Estrutura do Projeto

```
src/
│
├── components/
│   └── TaskItem.js
│
├── context/
│   └── TaskContext.js
│
├── pages/
│   ├── Home.js
│   └── AddTask.js
│
├── App.js
├── index.js
└── styles.css
```

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```
git clone <url-do-repositorio>
```

### 2. Acesse a pasta do projeto

```
cd aplicacao-de-tarefas
```

### 3. Instale as dependências

```
npm install
```

### 4. Execute a aplicação

```
npm start
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## 🧠 Conceitos Aplicados

### 🔹 Context API

Utilizada para gerenciar o estado global das tarefas, permitindo acesso em diferentes componentes sem necessidade de prop drilling.

### 🔹 Hooks

* `useState`: controle de estado das tarefas
* `useEffect`: sincronização com localStorage
* `useContext`: acesso ao contexto global

### 🔹 React Router

Responsável pela navegação entre páginas:

* `/` → Página inicial (lista de tarefas)
* `/add-task` → Adicionar nova tarefa
* `/edit-task/:id` → Editar tarefa existente

---

## 💾 Persistência de Dados

As tarefas são armazenadas no **localStorage**, garantindo que permaneçam salvas mesmo após fechar ou recarregar o navegador.

---

## 🎨 Estilização

O projeto utiliza CSS personalizado com:

* Layout centralizado
* Cards para tarefas
* Botões interativos
* Design moderno com gradiente

---

## 📈 Melhorias Futuras

* ✔ Marcar tarefas como concluídas
* 🔍 Filtro de tarefas (todas, concluídas, pendentes)
* 🌙 Modo escuro
* 📱 Responsividade para mobile
* 🎨 Integração com bibliotecas de UI (ex: Tailwind ou Material UI)

---

## 👨‍💻 Autor

Projeto desenvolvido por Diego Santos para prática de conceitos fundamentais do React.

---

## 📄 Licença

Este projeto é apenas para fins de estudo e aprendizado.
