import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-responsaveis-tasks',
  templateUrl: './responsaveis-tasks.component.html',
  styleUrls: ['./responsaveis-tasks.component.css']
})
export class ResponsaveisTasksComponent{
  public nome: String = '';
  constructor(
    public dialogRef: MatDialogRef<ResponsaveisTasksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  onConfirm(): void {
    // Lógica a ser executada quando o botão de confirmação for clicado
    // Você pode acessar os dados passados para o componente usando this.data
    // Exemplo: console.log(this.data);
    this.dialogRef.close();
  }


  onCancel(nome: string){
    // Lógica a ser executada quando o botão de cancelamento for clicado
    this.nome= nome
    this.dialogRef.close(this.nome);
  }
}