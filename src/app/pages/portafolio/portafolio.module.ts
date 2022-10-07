import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatTabsModule} from '@angular/material/tabs';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    PortafolioComponent,
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    MatGridListModule,
    MatCardModule,
    NgApexchartsModule,
    MatTabsModule,
    MatNativeDateModule
  ]
})
export class PortafolioModule { }
