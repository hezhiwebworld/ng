import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HotListComponent } from "./hot-list/hot-list.component";


const routes: Routes = [
  {
    path: '',
    component: HotListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotRoutingModule { }
