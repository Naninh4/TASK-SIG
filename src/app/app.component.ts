import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'tasksig';
  isAuthenticated: boolean = false;

  constructor(private router: Router, public autenticado: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.autenticado.usuarioAtenticado;
  }
  fazerLogin(): void{
    this.router.navigate(['tasks']);
  }

}
