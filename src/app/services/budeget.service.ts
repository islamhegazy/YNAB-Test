import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AddAccount } from '../models/add-account.model';

@Injectable({ providedIn: 'root' })
export class BudgetService {

  addAccountSubj = new Subject();

  
  constructor(private http: HttpClient) {}

  getMyBudgets(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/budgets`);
  }

  getMyBudgetAccounts(budget_id:string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/budgets/${budget_id}/accounts`);
  }

  addAccount(budget_id:string,AddAccount){
    return this.http.post<any>(`${environment.apiUrl}/budgets/${budget_id}/accounts`,AddAccount);
  }
 
}
