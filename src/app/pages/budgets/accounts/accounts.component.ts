import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../../../services/budeget.service';
import { Subscription } from 'rxjs';
import { NbWindowService } from '@nebular/theme';
import { AddAccountComponent } from '../add-account/add-account.component';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {

  accounts: Account[] = [];

  budgetId: string;
  getMyBudgetAccountsSub: Subscription;

  constructor(private BudgetService: BudgetService, private route: ActivatedRoute, private windowService: NbWindowService) { }

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.params.id;

    this.getMyBudgetAccountsSub = this.BudgetService.getMyBudgetAccounts(this.budgetId).subscribe((res) => {
      this.accounts = res.data.accounts;
      console.log(this.accounts)
    })

    this.BudgetService.addAccountSubj.subscribe(res => {
      if (res) {
        this.getMyBudgetAccountsSub = this.BudgetService.getMyBudgetAccounts(this.budgetId).subscribe((res) => {
          this.accounts = res.data.accounts;
          console.log(this.accounts)
        })
      }
    })
  }

  onAddAccount() {
    this.windowService.open(AddAccountComponent, {
      title: 'Add account',
      context: {
        id: this.budgetId,
      },
    });
  }
  ngOnDestroy() {
    if (this.getMyBudgetAccountsSub) this.getMyBudgetAccountsSub.unsubscribe();
  }
}
