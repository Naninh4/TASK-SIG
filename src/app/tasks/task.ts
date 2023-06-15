export class Banco {
    public ResponsavelList: any = [
        { id: 1, nome: 'Livia Vitoria' },
        { id: 2, nome: 'João Silva' },
        { id: 3, nome: 'Maria Souza' },
        { id: 4, nome: 'Carlos Ferreira' },
        { id: 5, nome: 'Ana Pereira' },
        { id: 6, nome: 'Pedro Santos' },
        { id: 7, nome: 'Juliana Oliveira' },
        { id: 8, nome: 'Rafaela Costa' },
        { id: 9, nome: 'Lucas Almeida' },
        { id: 10, nome: 'Mariana Rodrigues' }
    ];

    public ListaDeTarefas: any[] = [
        { id: 1, titulo: "Fazer a comida", data: "29-03-2200", descricao: "armaria", responsavel: this.ResponsavelList[0].nome, status: false, prioridade: "media" },
        { id: 2, titulo: "Limpar a casa", data: "30-03-2200", descricao: "limpeza geral", responsavel: this.ResponsavelList[1].nome, status: false, prioridade: "alta" },
        { id: 3, titulo: "Fazer exercícios", data: "01-04-2200", descricao: "academia", responsavel: this.ResponsavelList[2].nome, status: false, prioridade: "baixa" },
        { id: 4, titulo: "Comprar mantimentos", data: "02-04-2200", descricao: "supermercado", responsavel: this.ResponsavelList[0].nome, status: false, prioridade: "baixa" },
        { id: 5, titulo: "Fazer a comida", data: "29-03-2200", descricao: "armaria", responsavel: this.ResponsavelList[0].nome, status: false, prioridade: "média" },
        { id: 6, titulo: "Limpar a casa", data: "30-03-2200", descricao: "limpeza geral", responsavel: this.ResponsavelList[1].nome, status: false, prioridade: "alta" },
        { id: 7, titulo: "Fazer exercícios", data: "01-04-2200", descricao: "academia", responsavel: this.ResponsavelList[2].nome, status: false, prioridade: "baixa" },

        // Novas tarefas adicionadas
        { id: 8, titulo: "Enviar relatório mensal", data: "01-01-2023", descricao: "Preparar e enviar o relatório mensal de vendas", responsavel: this.ResponsavelList[0].nome, status: false, prioridade: "média" },
        { id: 9, titulo: "Atualizar o website", data: "02-01-2023", descricao: "Fazer as atualizações necessárias no website da empresa", responsavel: this.ResponsavelList[0].nome, status: false, prioridade: "alta" },
        { id: 10, titulo: "Reunião de equipe", data: "03-01-2023", descricao: "Participar da reunião semanal com a equipe de desenvolvimento", responsavel: this.ResponsavelList[1].nome, status: false, prioridade: "média" },
        { id: 11, titulo: "Preparar apresentação para cliente", data: "04-01-2023", descricao: "Preparar uma apresentação para uma reunião com um cliente importante", responsavel: this.ResponsavelList[1].nome, status: false, prioridade: "alta" },
        { id: 12, titulo: "Fazer backup dos dados", data: "05-01-2023", descricao: "Realizar o backup dos dados do servidor principal", responsavel: this.ResponsavelList[2].nome, status: false, prioridade: "média" },
        { id: 13, titulo: "Treinamento de novos funcionários", data: "06-01-2023", descricao: "Realizar um treinamento para os novos funcionários da empresa", responsavel: this.ResponsavelList[2].nome, status: false, prioridade: "baixa" },
        { id: 14, titulo: "Planejar evento corporativo", data: "07-01-2023", descricao: "Planejar todos os detalhes de um evento corporativo", responsavel: this.ResponsavelList[3].nome, status: false, prioridade: "média" },
    ]

}