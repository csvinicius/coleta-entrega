import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = 'https://raw.githubusercontent.com/brunochikuji/';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(`${this.apiUrl}/example/main/entregas.json`);
  }
}