import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ListComponent } from './list/list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loggedIn=false
  title = 'task';
  constructor(
  	private apiService: ApiService,
    private _router: Router
  ) {}

	logout() {
    	this.apiService.logout();
      this.loggedIn=false
      this._router.navigate(['/'])
	}

}
