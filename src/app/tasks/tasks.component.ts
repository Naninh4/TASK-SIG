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
  public ResponsavelList: any[] = [];
  public ListaDeTarefas: any[] = [];
  constructor(private dialog: MatDialog) {}

  // ngOnInit(): void {
  //   this.ResponsavelList = [{ id: 0, nome: 'Livia Vitoria' }];
  //   this.ListaDeTarefas = [{id: 0, titulo: "Fazer a comida", data: "29-03-2200", descricao: "armaria", responsavel: this.ResponsavelList[0]}];
  // } 
 
  
  SetResponsaveis() {
    const dialogRef = this.dialog.open(ResponsaveisTasksComponent, {
      width: '300px',
      height: '100px', // defina o tamanho desejado para a janela de pop-up
    });
  
    dialogRef.afterClosed().subscribe(result =>{
          console.log(result)
          if (result.trim().length === 0) {
            return;
          }
          const responsavel_cadastrado = this.ResponsavelList.find(pessoa => pessoa.nome.toLowerCase() === result.toLowerCase());
          if (!responsavel_cadastrado) {
            this.ResponsavelList.push({ id: this.responsavel.length, nome: result });
          }
    });
  }
  SetTasks(titulo: string, data: string, responsavel: string, descricao: string){
    if (titulo.trim().length === 0) {
      return alert("Preencha o título da tarefa");
    }
    if (data.trim().length === 0) {
      return alert("Preencha a data da tarefa");
    }
    if (responsavel.trim().length === 0) {
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
    console.log(this.ListaDeTarefas.length + 1,titulo, data, responsavel, descricao, this.status)
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
}
