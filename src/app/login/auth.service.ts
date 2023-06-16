import { Injectable } from '@angular/core';
import { UserAdmin } from './user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public usuarioAtenticado: boolean = false;
  constructor(private router: Router) { }

  fazerLogin(usuario: UserAdmin){
    if (usuario.nome === "admin" && usuario.senha ==="12345"){
      this.usuarioAtenticado = true;
      return this.router.navigate([''])
    }else{
      if (usuario.nome.trim().length === 0 && usuario.senha.trim.length === 0){
        this.usuarioAtenticado = false;
        alert("Preencha os campos!")
        return this.router.navigate(['login'])
      }else{
      this.usuarioAtenticado = false;
      alert("Usuario ou senha incorretas")
      return this.router.navigate(['login'])
      }
    }
  }
  GetAdmin(usuario: UserAdmin){
    return usuario.nome
  }
}
