import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // urlApi: string = 'http://localhost:3001';
  // urlApi: string = 'http://192.168.0.15:3001';
  urlApi: string = 'http://192.168.1.10:3001';

  constructor(
    private httpClient: HttpClient
  ) { }

  peticionGet(url) {
    return this.httpClient.get(`${ this.urlApi }/${url}`);
  }
}
