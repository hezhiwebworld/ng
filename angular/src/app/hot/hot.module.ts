import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotRoutingModule } from './hot-routing.module';
import { HotListComponent } from './hot-list/hot-list.component';

@NgModule({
  imports: [
    CommonModule,
    HotRoutingModule
  ],
  declarations: [HotListComponent]
})
export class HotModule { }
