import { NbAccordionModule, NbCardModule, NbButtonModule, NbWindowModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsComponent } from './budgets.component';
import { BudgetsRoutingModule } from './budgets-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { BudgetsListComponent } from './budgets-list/budgets-list.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { FormsModule } from '@angular/forms';
import { PayeesComponent } from './payees/payees.component';



@NgModule({
  declarations: [BudgetsComponent, AccountsComponent, BudgetsListComponent, AddAccountComponent,PayeesComponent],
  imports: [
    CommonModule,
    NbCardModule,
    FormsModule,
    NbAccordionModule,
    BudgetsRoutingModule,
    NbButtonModule,
    NbWindowModule.forChild(),
    NbInputModule,
    NbSelectModule
    
  ]
})
export class BudgetsModule { }
