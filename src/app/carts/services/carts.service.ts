import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  private apiUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) { }

  CreateNewCart(model: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, model);
  }
}
