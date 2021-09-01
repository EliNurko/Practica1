import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocacoclaRoutingModule } from './cocacocla-routing.module';
import { CocacoclaComponent } from './cocacocla.component';


@NgModule({
  declarations: [
    CocacoclaComponent
  ],
  imports: [
    CommonModule,
    CocacoclaRoutingModule
  ]
})
export class CocacoclaModule { }
