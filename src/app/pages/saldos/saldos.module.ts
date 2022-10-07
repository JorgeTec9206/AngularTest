import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaldosRoutingModule } from './saldos-routing.module';
import { SaldosComponent } from './saldos.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { NgApexchartsModule } from "ng-apexcharts";




@NgModule({
  declarations: [
    SaldosComponent
  ],
  imports: [
    CommonModule,
    SaldosRoutingModule,
    MatGridListModule,
    MatCardModule,
    NgApexchartsModule
  ]
})
export class SaldosModule { }
