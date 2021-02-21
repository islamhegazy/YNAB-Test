import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from '../../../services/budeget.service';
import { Subscription } from 'rxjs';
import { MyBudgets } from '../../../models/my-budgets.model';

@Component({
  selector: 'budgets-list',
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss']
})
export class BudgetsListComponent implements OnInit, OnDestroy {

  budgets: MyBudgets[] = [];

  getBudgetsSub: Subscription;

  constructor(private BudgetService: BudgetService) { }

  ngOnInit(): void {

    this.getBudgetsSub = this.BudgetService.getMyBudgets().subscribe((res: any) => {
      this.budgets = res.data.budgets;
    });

  }

  ngOnDestroy(): void {
    if (this.getBudgetsSub) this.getBudgetsSub.unsubscribe

  }
}
