import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { PayeesComponent } from './budgets/payees/payees.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path:'budgets',
      loadChildren: () => import('./budgets/budgets.module')
      .then(m => m.BudgetsModule),
    },
    {
      path: 'payees',
      component:PayeesComponent
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'budgets',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
