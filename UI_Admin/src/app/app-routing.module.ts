import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {dashboardComponent}  from './dashboard/dashboard.component';
const routes: Routes = [

{path: '', component: dashboardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
