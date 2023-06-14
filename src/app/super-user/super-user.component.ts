import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAdmin } from './admin';
import { AuthService } from './auth.service.spec';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.css']
})
export class SuperUserComponent{
  protected usuario:  UserAdmin = new UserAdmin();

  constructor(private authService: AuthService) {
    
  }
  FazerLogin()
  {
    this.authService.FazerLogin(this.usuario)
  }
}
