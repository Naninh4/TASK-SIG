import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [RouterModule] 
})
export class AppModule { }
