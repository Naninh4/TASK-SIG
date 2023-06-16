import { Component,ElementRef,OnInit, Renderer2, ViewChild} from '@angular/core';
import { ResponsaveisTasksComponent } from '../responsaveis-tasks/responsaveis-tasks.component';
import { MatDialog} from '@angular/material/dialog';
import { Banco } from './task';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html' ,
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent{
  @ViewChild('tarefaAlterada', { static: false }) tarefaAlteradaRef!: ElementRef;
  private titulo: string = '';
  private data: string = '';
  private responsavel: string ='';
  private descricao: string = '';
  private status: boolean = false;
  private prioridade: String ='';
  private ResponsavelList: any[] = [];
  private ListaDeTarefas: any[] = [];
  public ViewsTarefas: any[] = [];
  public tarefaalterada: any = [];
  private ListPrioridade: any[]=['baixa','média','alta'];
  public banco: Banco = new Banco();
  private tar: any[] = [];
  private admin: boolean = false;


  constructor(private dialog: MatDialog, private router: Router, public autenticado: AuthService,){

  }

  ngOnInit(): void {
    if (this.autenticado.usuarioAtenticado === true){
      this.admin = this.autenticado.usuarioAtenticado
    }else{
      this.router.navigate(['/login'])
    }
   this.ResponsavelList = this.banco.ResponsavelList
   this.ListaDeTarefas = this.banco.ListaDeTarefas
    
  }
  sair(){
    this.admin = false;
  }
  GetAdmin(){
    return this.admin
  }

  Recarregar(): void {
    this.ViewsTarefas = this.ListaDeTarefas;
  }
  GetPrioridade(){
    return this.ListPrioridade
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
 
  
  SetTasks(titulo: string, data: string, responsavel: string, descricao: string, prioridade: string){ // cadastrando tarefas
    if (titulo.trim().length === 0) {
      return alert("Preencha o título da tarefa");
    }
    if (data.trim().length === 0) {
      return alert("Preencha a data da tarefa");
    }
    if (responsavel === "#") {
      return alert("Indique o responsável pela da tarefa");
    }
    if (prioridade === "#") {
      return alert("Indique a prioridade da tarefa");
    }
    const novaTarefa = {
      id: this.ListaDeTarefas.length + 1,
      titulo: titulo,
      data: data,
      responsavel: responsavel,
      descricao: descricao,
      status: false,
      prioridade: prioridade
    };
    const tarefa_cadastrada = this.ListaDeTarefas.find(tarefa => tarefa.titulo.toLowerCase() === titulo.toLowerCase());
    if (!tarefa_cadastrada) {
      this.ListaDeTarefas.push(novaTarefa);
      return alert("Tarefa Cadastrada!")
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
    
   
   
  removerTarefa(id: string){
      this.ListaDeTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.id !== id);
      this.Recarregar()
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
      postMessage("Tarefa Concluída :)")
      this.Recarregar()
    }else{
      alert("Tarefa não encontrada.")
    }
  }
  searchResp(e: Event): void {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    this.responsavel = value;
    this.ViewsTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.responsavel === value);
    this.searchStatus
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
  searchPrioridade(e: Event): void {

    const target = e.target as HTMLSelectElement;
    const value = target.value;
      
      if(value === "#"){
        this.ViewsTarefas = []
      }else{
      this.ViewsTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.prioridade === value);
    }
  }
  searchResponsavel(e: Event): void {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    this.responsavel = value;
    this.ViewsTarefas = this.ListaDeTarefas.filter((tarefa) => tarefa.responsavel === value);
    this.searchStatus
  }
  SelectTarefa(id: string){
    this.tarefaalterada = id
    this.tarefaAlteradaRef.nativeElement.textContent = this.tarefaalterada;
  }
  GetTarefaId(){
    const id = this.tarefaAlteradaRef.nativeElement.textContent
    this.tar =  this.ListaDeTarefas.filter((tarefa) => tarefa.id === id)
    return this.tar;
  }
    AlterarTarefa(
      titulo: string,
      data: string,
      descricao: string,
      responsavel: string,
      status: string,
      prioridade: string
    ): void {
      // Lógica a ser executada quando o botão de cancelamento for clicado
      const id = this.tarefaAlteradaRef.nativeElement.textContent;
      if (status === 'true') {
        this.status = true;
      } else {
        this.status = false;
      }
      if (id === '') {
        alert('Selecione uma tarefa no campo Editar da coluna das ações.');
      } else {
        const index = this.ListaDeTarefas.findIndex((tarefa) => tarefa.id === parseInt(id));
        console.log(index);
        if (index !== -1) {
          const novaTarefa = {
            id: parseInt(id),
            titulo: titulo,
            descricao: descricao,
            data: data,
            responsavel: responsavel,
            status: this.status,
            prioridade: prioridade
          };
          this.ListaDeTarefas[index] = novaTarefa;
          this.ViewsTarefas = [...this.ListaDeTarefas];
          this.tarefaAlteradaRef.nativeElement.textContent = null;
          alert('Tarefa Alterada.');
        } else {
          alert('Preencha os campos vazios.');
        }
      }
    }
    
    
    GetTarefaAlterada(){
      return this.tarefaalterada
    }
}
