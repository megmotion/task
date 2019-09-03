import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';

const appRoutes: Routes = [
      { path: '', component: LoginComponent },
      { path: 'list', component: ListComponent },
    ]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
       appRoutes,
      )
  ],
  providers:  [ 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
