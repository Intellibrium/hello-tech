import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { ThirdpartydashboardComponent } from './thirdpartydashboard/thirdpartydashboard.component';
import { DpComponent } from './dp/dp.component';
import { HomehComponent } from './homeh/homeh.component';
import { DoctorobservationComponent } from './doctorobservation/doctorobservation.component';
import { ClinicalinvestigationComponent } from './clinicalinvestigation/clinicalinvestigation.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { PreventivemeasureComponent } from './preventivemeasure/preventivemeasure.component';
import { DoctornotepatientComponent } from './doctornotepatient/doctornotepatient.component';
import { DocnotemedicorComponent } from './docnotemedicor/docnotemedicor.component';
import { FcreferralsComponent } from './fcreferrals/fcreferrals.component'
import { NewdashComponent } from './newdash/newdash.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [ 
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'login1',component:Login2Component},
  {path:'thirdparty',component:ThirdpartydashboardComponent},
  {path:'new',component: NewdashComponent},
  {path:'test',component:TestComponent},
  {path:'dp',component:DpComponent},
  
  
  {path: 'dp', component:DpComponent ,
  children:[
    
    
    {path: 'home', component: HomehComponent},
    {path: 'do', component: DoctorobservationComponent},
    {path: 'co', component: ClinicalinvestigationComponent},
    {path: 'diag', component: DiagnosticsComponent},
{path: 'treat', component: TreatmentComponent},
{path: 'pm', component: PreventivemeasureComponent},
 {path: 'dtp', component: DoctornotepatientComponent}, 

   {path: 'dtm', component: DocnotemedicorComponent}, 
    {path: 'referrals', component: FcreferralsComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
