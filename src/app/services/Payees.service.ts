import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PayeesService {
  
  constructor(private http: HttpClient) {}

  getPayees(budget_id:string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/budgets/${budget_id}/payees`);
  }

 
}
