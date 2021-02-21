import { BudgetsComponent } from './budgets.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BudgetsListComponent } from './budgets-list/budgets-list.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { PayeesComponent } from './payees/payees.component';


const routes: Routes = [{
  path: '',
  component: BudgetsComponent,
  children: [ {
    path: 'list',
    component: BudgetsListComponent,
  }, 
  {
    path: 'budget/:id/accounts',
    component: AccountsComponent,
  },
  {
    path: 'add-account',
    component: AddAccountComponent,
  },
  {
    path: 'budget/:id/payees',
    component: PayeesComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },

],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetsRoutingModule {
}
