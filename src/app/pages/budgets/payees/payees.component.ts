
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PayeesService } from '../../../services/Payees.service';
import { Payees } from '../../../models/payees.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'payees',
  templateUrl: './payees.component.html',
  styleUrls: ['./payees.component.scss']
})
export class PayeesComponent implements OnInit,OnDestroy {

  PayeesList: Payees[] = [];
  budgetId: string;
  getPayeesSub:Subscription;
  constructor(private PayeesService: PayeesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.params.id;
   this.getPayeesSub =  this.PayeesService.getPayees(this.budgetId).subscribe((res:any) => {
      if(res){{
        this.PayeesList = res.data.payees
      }}
    })
  }

  ngOnDestroy(){
    if(this.getPayeesSub) this.getPayeesSub.unsubscribe();
  }
}
