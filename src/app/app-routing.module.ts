// Módulos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './components/acercade/acercade.component';

// Componentes
import { AgendaComponent } from './components/agenda/agenda.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  /*{
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },*/
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "agenda",
    component: AgendaComponent
  },
  {
    path: "acerca",
    component: AcercadeComponent
  },
  { path: 'coca', loadChildren: () => import('./pages/cocacocla/cocacocla.module').then(m => m.CocacoclaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
