import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserAdmin } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

   admin: UserAdmin = new UserAdmin

  constructor(public authService: AuthService){

  }
  ngOnInit(){
  }
  fazerLogin(){
      return this.authService.fazerLogin(this.admin)
  }
}
