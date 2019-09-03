import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm;

  constructor(
  	private formBuilder: FormBuilder,
  	private apiService: ApiService,
    private _router: Router
  ) {
  	this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login() {
    const val = this.loginForm.value;
    if (val.username && val.password) {
      this.apiService.login(val.username, val.password)
        .subscribe(
          res => {
            localStorage.setItem('token', res.headers.get('Authorization'))
            this._router.navigate(['/list'])
          },
          err => console.log(err),
        );
    } 
  }
}
