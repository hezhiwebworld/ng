import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AboutModule } from "../about/about.module";

import { HotModule } from "../hot/hot.module";

import { ResumeModule } from "../resume/resume.module";

const routes: Routes = [
  {
    path : 'abouts' ,
    loadChildren: './../about/about.module#AboutModule'
  },
  {
    path : 'hots' ,
    loadChildren: './../hot/hot.module#HotModule'
  },
  {
    path : 'resume' ,
    loadChildren: './../resume/resume.module#ResumeModule'
  },
  {
    path: '*',
    redirectTo: 'abouts',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:  [ RouterModule ]
})
export class AppRoutingModule { }
