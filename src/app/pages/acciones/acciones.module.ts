import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccionesRoutingModule } from './acciones-routing.module';
import { AccionesComponent } from './acciones.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AccionesComponent
  ],
  imports: [
    CommonModule,
    AccionesRoutingModule,
    MatGridListModule,
    MatCardModule,
    NgApexchartsModule
  ]
})
export class AccionesModule { }
