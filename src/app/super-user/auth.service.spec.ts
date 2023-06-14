import { Injectable } from '@angular/core';
import { UserAdmin } from './admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    protected adminautenticado: boolean = false;
    constructor(private router: Router){

    }
    FazerLogin(usuario: UserAdmin){
        if (usuario.nome === "admin" && usuario.senha === "123456"){
            this.adminautenticado = true;
            this.router.navigate(["/tasks"])
        }else{
            this.adminautenticado = false;
            return alert("Usuario ou senha incorretos")
        }
    }
}