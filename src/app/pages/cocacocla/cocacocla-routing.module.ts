import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocacoclaComponent } from './cocacocla.component';

const routes: Routes = [
  { 
    path: '', 
    component: CocacoclaComponent 
  }, 
  { 
    path: 'detalle', 
    loadChildren: () => import('./detalle/detalle.module').then(m => m.DetalleModule) 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocacoclaRoutingModule { }
