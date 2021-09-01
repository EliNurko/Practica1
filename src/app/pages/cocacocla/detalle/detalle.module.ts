import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { DatosComponent } from 'src/app/components/common/datos/datos.component';


@NgModule({
  declarations: [
    DetalleComponent,
    DatosComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule
  ]
})
export class DetalleModule { }
