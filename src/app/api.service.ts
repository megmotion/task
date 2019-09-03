import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public token : any;
  loggedIn: boolean = false;
  constructor(private http: HttpClient) { 
  }

  login(username: string, password: string) {
    this.loggedIn = true;
    return this.http.post<any>('http://frontend-recruitment.one2tribe.pl:8080/api/authenticate', {username, password},{ observe: "response"})
      .pipe(
           catchError((err: HttpErrorResponse) => throwError('Server error'))
        )
  }

  getData():Observable<any>{
  	return this.http.get('https://cors-anywhere.herokuapp.com/http://frontend-recruitment.one2tribe.pl:8080//api/v1/item')
      .pipe(
           catchError((err: HttpErrorResponse) => throwError('Server error'))
        )
  }  

  getToken() {
    return localStorage.getItem('token')
  }

  addItem(name: string) {
    return this.http.post<any>('https://cors-anywhere.herokuapp.com/http://frontend-recruitment.one2tribe.pl:8080//api/v1/item', {name},{ observe: "response"})
      .pipe(
         catchError((err: HttpErrorResponse) => throwError('Server error'))
      )
  }

  logout() {
    localStorage.setItem('token', '');
    this.loggedIn = false;
  }

}
