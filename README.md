# Study Timer - Estatísticas de Estudos

O Study Timer é uma aplicação desenvolvida em React e Next.js que permite aos usuários monitorar o tempo de estudo de diferentes disciplinas e tópicos. A ferramenta auxilia no gerenciamento do tempo de estudo, salvando os registros no localStorage e exibindo estatísticas visuais. Este projeto é um teste técnico para a vaga de Desenvolvedor Frontend NextJs na [Vício de uma estudante](https://viciodeumaestudante.com.br/).

![Alt text](study-timer.png)

## Funcionalidades

- Selecionar uma disciplina e um tópico de estudo.

- Iniciar, pausar e resetar um cronômetro para monitorar o tempo de estudo.

- Salvar os tempos de estudo para futura consulta.

- Visualizar histórico de estudos.

- Exibir estatísticas com gráficos.

## Fluxo da aplicação:

- Ao clicar no botão Estatísticas de estudo, você deverá ver uma drawer com gráficos de estatísticas sobre o tempo de estudo de cada disciplina.
- Ao clicar no botão Últimos estudos, você deverá ser redirecionado para a page /records, onde conseguirá visualizar as últimas disciplinas estudadas e quanto tempo estudou cada uma de acordo com o cronômetro.
- Para listar as últimas disciplinas, você deverá selecionar uma disciplina e um tema, iniciar o cronômetro e pausar/salvar o tempo.
- Ao clicar no botão salvar, deverá aparecer um modal confirmando as informações.

## Tecnologias Utilizadas

- React e Next.js para desenvolvimento da interface.

- Tailwind CSS para estilização.

- ShadCN/UI para componentes reutilizáveis.

- Recharts para visualização de dados.

- LocalStorage para persistência dos dados do usuário.

## Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/ygormaiac/study-statistics.git
```

Acesse o diretório do projeto:

```bash
cd study-statistics
```

Instale as dependências:

```bash
npm install
# or
yarn install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Acesse no navegador:

http://localhost:3000

## Melhorias Futuras

- Adicionar suporte a contas de usuário e login.

- Permitir exportação dos registros de estudo.

- Integração com calendários para planejamento.
