# Tasksig

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## OLÁ!
-  Bem vindo ao Tasksig :)

* tentei deixar esse projeto o mais original possível, criando toda a identidade visual como se fosse uma prototipagem para o mercado. Portanto, a arte utilizada é autoral.

# Sobre o Tasksig


Este projeto é uma aplicação de lista de tarefas desenvolvida em Angular. Permite ao admin cadastrar, editar, listar e excluir tarefas, filtrando-as por diferentes critérios, como número, título, responsável, status e prioridade separadamente.
- Vale ressaltar que essas atividades só podem ser realizadas mediante o login devidamente autenticado.

## Funcionalidades

O projeto possui as seguintes funcionalidades:


### Autenticação

A página inicial é uma tela de login que você pode acessar com as credenciais:

- Login: admin
- senha: 12345

Se as credenciais forem válidas o app te redireciona para a tela principal onde estarão disponóveis o cadastro a listagem e edição das tarefas.
Caso os campos estejam vázios o site retorna um alerta solicitando o preenchimento dos campos. E caso os campos sejam preenchidos de forma incorreta o alerta 
informa que o usuário ou a senha estão incorretos.


### Listagem

A seção de listagem exibe todas as tarefas cadastradas. É possível filtrar as tarefas por número, título, responsável, status e prioridade. Além disso, é possível marcar uma tarefa como concluída ou excluí-la além de poder selecioná-la para edição que ocorre em uma secção posterior.

### Cadastro

A seção de cadastro permite ao usuário adicionar novas tarefas. É necessário informar o título, a data, o responsável, a descrição e a prioridade da tarefa. Caso contrário, retorna um alerta solicitando o preenchimento de alguns campos que são obrigatórios:

- Titulo.
- Data.
- Responsável.
- Prioridade.

Para mais, também é possível cadastrar um novo responsável para a tarefa clicando no icon de adição. Caso o campo enviado seja vazio, o programa apenas vai fechar o pop-up.

### Edição

A seção de edição permite ao usuário modificar os dados de uma tarefa existente. É possível alterar o título, a data, a descrição, o responsável, o status e a prioridade da tarefa. Caso os campos estejam vazios é retornado um alerta para que os campos sejam preenchidos.

## Como executar o projeto

1. Certifique-se de ter o Angular CLI instalado em sua máquina.
2. Faça o clone deste repositório.
3. Navegue até a pasta do projeto e execute o comando `npm install` para instalar as dependências.
4. Execute o comando `ng serve` para iniciar o servidor de desenvolvimento.
5. Abra o navegador e acesse `http://localhost:4200` para visualizar a aplicação.

   
## Considerações finais.

Esse foi o meu primeiro contato com o framework Angular, então algumas coisas que eu queria implementar ao projeto ficaram de fora, também devido ao tempo de elaboração.
Ademais, reconheço que foi uma experiência enriquecedora, haja vista o potencial da ferramenta utilizada, achei bastante e o fato de ser orientada à componentes ajudou muito.
