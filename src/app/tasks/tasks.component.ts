import { Component,OnInit} from '@angular/core';
import { ResponsaveisTasksComponent } from '../responsaveis-tasks/responsaveis-tasks.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent{
  private titulo: string = '';
  private data: string = '';
  private responsavel: string ='';
  private descricao: string = '';
  private status: boolean = false;
  private ResponsavelList: any[] = [];
  private ListaDeTarefas: any[] = [];
  public ViewsTarefas: any[] = [];


  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.ResponsavelList = [
      { id: 1, nome: 'Livia Vitoria' },
      { id: 2, nome: 'João Silva' },
      { id: 3, nome: 'Maria Souza' }
    ];
    this.ListaDeTarefas = [
      { id: 1, titulo: "Fazer a comida", data: "29-03-2200", descricao: "armaria", responsavel: this.ResponsavelList[0].nome, status: false },
      { id: 2, titulo: "Limpar a casa", data: "30-03-2200", descricao: "limpeza geral", responsavel: this.ResponsavelList[1].nome, status: false },
      { id: 3, titulo: "Fazer exercícios", data: "01-04-2200", descricao: "academia", responsavel: this.ResponsavelList[2].nome, status: false },
      { id: 4, titulo: "Comprar mantimentos", data: "02-04-2200", descricao: "supermercado", responsavel: this.ResponsavelList[0].nome, status: false },
      { id: 5, titulo: "Estudar para o exame", data: "03-04-2200", descricao: "matemática", responsavel: this.ResponsavelList[1].nome, status: false }
    ];
  }
  Recarregar(): void {
    this.ViewsTarefas = this.ListaDeTarefas;
  }
  // cadastrando os responsaveis atrasvés de um pop-up simples
  SetResponsaveis() {
    const dialogRef = this.dialog.open(ResponsaveisTasksComponent, {
      width: '300px',
      height: '100px', // definindo o tamanho da janela do pop-up
    });
  
    dialogRef.afterClosed().subscribe(result =>{ // definindo ação que deve ser feita assim que o pop-up for encerrado
          if (result.trim().length === 0) { // verifica se o resultado (o que o pop-up retorna) está vazio. Assim evitando de criar um item vazio
            return;
          }
          const responsavel_cadastrado = this.ResponsavelList.find(pessoa => pessoa.nome.toLowerCase() === result.toLowerCase()); // verifica se o responsável já foi cadastrado
          if (!responsavel_cadastrado) { // se não foi ele cadastra
            this.ResponsavelList.push({ id: this.responsavel.length, nome: result });
          }
    });
  }
  
  SetTasks(titulo: string, data: string, responsavel: string, descricao: string){ // cadastrando tarefas
    if (titulo.trim().length === 0) {
      return alert("Preencha o título da tarefa");
    }
    if (data.trim().length === 0) {
      return alert("Preencha a data da tarefa");
    }
    if (responsavel === "#") {
      return alert("Indique o responsável pela da tarefa");
    }
    const novaTarefa = {
      id: this.ListaDeTarefas.length + 1,
      titulo: titulo,
      data: data,
      responsavel: responsavel,
      descricao: descricao,
      status: false
    };
    const tarefa_cadastrada = this.ListaDeTarefas.find(tarefa => tarefa.titulo.toLowerCase() === titulo.toLowerCase());
    if (!tarefa_cadastrada) {
      this.ListaDeTarefas.push(novaTarefa);
    }

  }
  GetResponsaveis(){
    return this.ResponsavelList;
  }
  GetListadeTarefas(){
    return this.ListaDeTarefas;
  }
  searchTitle(e: Event): void{
    const target =  e.target as HTMLInputElement
    const value = target.value.toLowerCase()
    
     this.ViewsTarefas =  this.ListaDeTarefas.filter((tarefa) => tarefa.descricao.toLowerCase().includes(value) || tarefa.titulo.toLowerCase().includes(value))
    
    }
    searchStatus(e: Event): void {
      const target = e.target as HTMLSelectElement;
      const value = target.value;
      if (value === "true"){
        this.ViewsTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.status === true);
      }else{
        if(value === "#"){
          this.ViewsTarefas = []
        }else{
        this.ViewsTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.status === false);
      }
    }
    }
  removerTarefa(id: string){
      this.ListaDeTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.id !== id);
      // O método filter recebe uma função de callback que é executada para cada elemento da lista de tarefas. Essa função verifica se o ID da tarefa é diferente do ID que foi passado como parâmetro. Se a condição for verdadeira, a tarefa é mantida na lista filtrada; caso contrário, ela é removida.
    
  }
  searchResponsavel(e: Event): void {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
  
    this.ViewsTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.responsavel === value);
  this.searchStatus
  }
  
  
  
  searchId(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
  
    this.ViewsTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.id.toString() === value);
  }
  marcarConcluida(id: string): void{
    console.log(id)
    const tarefa = this.ListaDeTarefas.find((tarefa) => tarefa.id === id)
    console.log(tarefa);
    if (tarefa){
      tarefa.status = true;
    }else{
      alert("Tarefa não encontrada.")
    }
  }
}
