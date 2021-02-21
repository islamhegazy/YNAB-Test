import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbWindowRef } from '@nebular/theme';
import { BudgetService } from '../../../services/budeget.service';
import { AddAccount } from '../../../models/add-account.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit,OnDestroy {

  budget_id: string;
  addAccountSub:Subscription;

  
  constructor(public windowRef: NbWindowRef, private BudgetService: BudgetService) { }

  ngOnInit(): void {
    this.budget_id = this.windowRef.config.context['id'];
  }

  close() {
    this.windowRef.close();
  }

  onSubmit(f: NgForm) {
 
    let addAccount = {
      "account": new AddAccount(
        f.value.name,
        f.value.type,
        +f.value.balance,
      )
    }
   this.addAccountSub = this.BudgetService.addAccount(this.budget_id, addAccount).subscribe((res) => {
      if(res){
        this.BudgetService.addAccountSubj.next(true);
      }
    })
  }
  ngOnDestroy(){
    if(this.addAccountSub) this.addAccountSub.unsubscribe();
  }
}
