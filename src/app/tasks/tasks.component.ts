import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent{
  protected titulo: string = '';
  protected data: string = '';
  protected responsavel: string ='';
  protected descricao: string = '';

  public ResponsavelList: any[] = [];
  public ListaDeTarefas: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.ResponsavelList = [{ id: 0, nome: 'Livia Vitoria' }];
    this.ListaDeTarefas = [{id: 0, titulo: "Fazer a comida", data: "29-03-2200", descricao: "armaria", responsavel: this.ResponsavelList[0]}];
  } 
  
  SetResponsaveis(nome_responsavel: string) {
    if (nome_responsavel.trim().length === 0) {
      return;
    }
    const responsavel_cadastrado = this.ResponsavelList.find(pessoa => pessoa.nome.toLowerCase() === nome_responsavel.toLowerCase());
    if (!responsavel_cadastrado) {
      this.ResponsavelList.push({ id: this.responsavel.length, nome: nome_responsavel });
    }
  }
  SetTasks(titulo: string, data: string, respon: string, descricao: string){
    if (titulo.trim().length === 0) {
      return alert("Preencha o título da Tarefa");
    }
    if (data.trim().length === 0) {
      return alert("Preencha a data da Tarefa");
    }
    if (respon.trim().length === 0) {
      return alert("Indique o responsável pela da Tarefa");
    }
    const novaTarefa = {
      id: this.ListaDeTarefas.length + 1,
      titulo: titulo,
      data: data,
      responsavel: respon,
      descricao: descricao
    };
    const tarefa_cadastrada = this.ListaDeTarefas.find(tarefa => tarefa.titulo.toLowerCase() === titulo.toLowerCase());
    console.log(this.ListaDeTarefas.length + 1,titulo, data, respon, descricao)
    if (!tarefa_cadastrada) {
      this.ListaDeTarefas.push(novaTarefa);
    }
  }
}
