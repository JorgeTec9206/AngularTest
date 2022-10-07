import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'portafolio',
    loadChildren: () => import('./portafolio/portafolio.module').then(m => m.PortafolioModule)
  },
  {
    path: 'saldos',
    loadChildren: () => import('./saldos/saldos.module').then(m => m.SaldosModule)
  },
  {
    path: 'acciones',
    loadChildren: () => import('./acciones/acciones.module').then(m => m.AccionesModule)
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./movimientos/movimientos.module').then(m=> m.MovimientosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
