import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule,FormsModule} from'@angular/forms';
import {RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { ThirdpartydashboardComponent } from './thirdpartydashboard/thirdpartydashboard.component';
import { HomehComponent } from './homeh/homeh.component';
import { DpComponent } from './dp/dp.component';
import { DoctorobservationComponent } from './doctorobservation/doctorobservation.component';
import { ClinicalinvestigationComponent } from './clinicalinvestigation/clinicalinvestigation.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { PreventivemeasureComponent } from './preventivemeasure/preventivemeasure.component';
import { DoctornotepatientComponent } from './doctornotepatient/doctornotepatient.component';
import { DocnotemedicorComponent } from './docnotemedicor/docnotemedicor.component';
import { FcreferralsComponent } from './fcreferrals/fcreferrals.component';
import { NewdashComponent } from './newdash/newdash.component';
import { TestComponent } from './test/test.component';



const appRoutes: Routes=[
  //login
  {path:'dashboard',component:DashboardComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    Login2Component,
    ThirdpartydashboardComponent,
    HomehComponent,
    DpComponent,
    DoctorobservationComponent,
    ClinicalinvestigationComponent,
    DiagnosticsComponent,
    TreatmentComponent,
    PreventivemeasureComponent,
    DoctornotepatientComponent,
    DocnotemedicorComponent,
    FcreferralsComponent,
    NewdashComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
