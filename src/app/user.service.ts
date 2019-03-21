import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as URLS from './constUrls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  getCurrentUser(id) {
    return this.http.get(`${URLS.GET_USER}/${id}`);
  }
  public getUsers(page, count) {
    return this.http.get(`${URLS.GET_USER}?page=${page}&count=${count}`);
  }
  public getPositions() {
    return this.http.get(`${URLS.GET_POS}`);
  }
  public getToken() {
    return this.http.get(`${URLS.GET_TOKEN}`);
  }
  public postUser(token, body) {
    let headers = new HttpHeaders();
    headers = headers.append('Token', token);
    const formData = new FormData();
    formData.append('position_id', body.position);
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('phone', body.phone);
    formData.append('photo', body.image);
    console.log(headers.has('Token'));
    console.log(formData);
    return this.http.post(`${URLS.GET_USER}`, formData, {headers: headers} );
  }
}
