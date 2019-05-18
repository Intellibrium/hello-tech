import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { AppComponent } from './app.component';
import{ReactiveFormsModule,FormsModule} from'@angular/forms';
import {RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
//FIREBASE

//import{AngularFireModule} from 'angular';

import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
// test
import {TestPComponent} from './Components/test/testp.component';
import {TestCComponent} from './Components/test/testc.component';


//doctor
import {DhomelayoutComponent} from './Components/doctor/dashboard/dhomelayout/dhomelayout.component';

import {DDashboardComponent} from './Components/doctor/dashboard/ddashboard.component';
//
//ram test component

//D:\tech\firstcare-web\src\app\user\register\patient-registeration\control-messages.component.ts
//front
import {FCComponent} from './components/fc/fchome.component';
//
import {ControlMessagesComponent} from './Components/register/patient-registeration/control-messages.component';
import {Group} from './Components/register/patient-registeration/Group';
import {addMemberComponent} from './Components/register/patient-registeration/complete-patient-profile/addMembers.component'
//
//import {RamComponent} from './Components/ram.component';
//import {RajComponent} from './raj.component';
import { DashboardComponent } from './Components/patient/dashboard/dashboard.component';
import { AskexpertComponent } from './Components/patient/services/askexpert/askexpert.component';
import { ChatComponent } from './Components/patient/services/chat/chat.component';

import { ChatOptionComponent } from './Components/patient/services/chat/chatOption.component';
import { CPreConsultationClinicForm } from './Components/patient/services/chat/medical-records/chat-pre-consultation/chat-pre-consultationClinicform.component'
import { CPreConsultationDoctorForm } from './Components/patient/services/chat/medical-records/chat-pre-consultation/chat-pre-consultationDoctorform.component'
import { CPreConsultationHospitalForm} from './Components/patient/services/chat/medical-records/chat-pre-consultation/chat-pre-consultationHospitalform.component'
import { CPreConsultationSelfMedicationForm} from './Components/patient/services/chat/medical-records/chat-pre-consultation/chat-pre-consultationSelfMedicationform.component';
import { EmergencyComponent } from './Components/patient/services/emergency/emergency.component';
//import { FaqComponent } from './user/patient/services/faq/faq.component';
import { SearchComponent } from './Components/patient/services/search/search.component';
//find appropriate
import { FindAppropriateComponent } from './Components/patient/services/find-appropriate/find-appropriate.component';
import {FindComponent } from './Components/patient/services/find-appropriate/find/find.component';
import { MedicalPlannerComponent } from './Components/patient/services/medical-planner/medical-planner.component';
import { OrderComponent } from './Components/patient/services/order/order.component';
import { MedicalTourismComponent } from './Components/patient/services/medical-tourism/medical-tourism.component';

//Medical track
import { MedicalTrackComponent } from './Components/patient/services/medical-track/medical-track.component';
import { Table0Component} from './Components/patient/services/medical-track/medicalTrackTable0.component';
import { Table1Component} from './Components/patient/services/medical-track/medicalTrackTable1.component';
import { Table2Component} from './Components/patient/services/medical-track/medicalTrackTable2.component';
import { Table3Component} from './Components/patient/services/medical-track/medicalTrackTable3.component';
import { Table4Component} from './Components/patient/services/medical-track/medicalTrackTable4.component';

import { TakeOpinionComponent } from './Components/patient/services/take-opinion/take-opinion.component';
import { MedicalRecordsComponent } from './Components/patient/services/chat/medical-records/medical-records.component';
import { SymptomsComponent } from './Components/patient/services/chat/medical-records/symptoms/symptoms.component';
import { DiagnosisComponent } from './Components/patient/services/chat/medical-records/diagnosis/diagnosis.component';
import { TreatmentComponent } from './Components/patient/services/chat/medical-records/treatment/treatment.component';
import { LabComponent } from './Components/patient/services/chat/medical-records/lab/lab.component';
import { ChatDiagnosisComponent } from './Components/patient/services/chat/medical-records/diagnosis/chat-diagnosis/chat-diagnosis.component';
import { AskexpertLabComponent } from './Components/patient/services/askexpert/askexpert-record-form/askexpert-lab/askexpert-lab.component';
import { docmeComponent } from './Components/patient/services/askexpert/askexpert-record-form/docme/docme.component';

import { AskexpertSymptomsComponent } from './Components/patient/services/askexpert/askexpert-record-form/askexpert-symptoms/askexpert-symptoms.component';
import { AskexpertTreatmentComponent } from './Components/patient/services/askexpert/askexpert-record-form/askexpert-treatment/askexpert-treatment.component';
import { AskexpertDiagnosisComponent } from './Components/patient/services/askexpert/askexpert-record-form/askexpert-diagnosis/askexpert-diagnosis.component';
// ae pre
import { AEPreConsultationClinicForm } from './Components/patient/services/askexpert/askexpert-record-form/askexpert-pre-consultation/askexpert-pre-consultationClinicform.component'
import { AEPreConsultationDoctorForm } from './Components/patient/services/askexpert/askexpert-record-form/askexpert-pre-consultation/askexpert-pre-consultationDoctorform.component'
import { AEPreConsultationHospitalForm} from './Components/patient/services/askexpert/askexpert-record-form/askexpert-pre-consultation/askexpert-pre-consultationHospitalform.component'
import { AEPreConsultationSelfMedicationForm} from './Components/patient/services/askexpert/askexpert-record-form/askexpert-pre-consultation/askexpert-pre-consultationSelfMedicationform.component';
//
import { EmerYourselfComponent } from './Components/patient/services/emergency/emer-yourself/emer-yourself.component';
import { EmerOthersComponent } from './Components/patient/services/emergency/emer-others/emer-others.component';
import {EmerGeneralComponent} from './Components/patient/services/emergency/emer-general/EmerGeneralComponent.component';

//
import { HomelayoutComponent } from './Components/patient/dashboard/homelayout/homelayout.component';
import { PhomelayoutComponent } from './Components/patient/dashboard/phomelayout/phomelayout.component';
import { OpinionRcordsFormComponent } from './Components/patient/services/take-opinion/opinion-rcords-form/opinion-rcords-form.component';
import { SdiagnosisComponent } from './Components/patient/services/take-opinion/opinion-rcords-form/sdiagnosis/sdiagnosis.component';
import { SlabComponent } from './Components/patient/services/take-opinion/opinion-rcords-form/slab/slab.component';
import { SodiagnosisComponent } from './Components/patient/services/take-opinion/opinion-rcords-form/sodiagnosis/sodiagnosis.component';
import { SolabComponent } from './Components/patient/services/take-opinion/opinion-rcords-form/solab/solab.component';
import { SosymptomsComponent } from './Components/patient/services/take-opinion/opinion-rcords-form/sosymptoms/sosymptoms.component';
import { SotreatmentComponent } from './Components/patient/services/take-opinion/opinion-rcords-form/sotreatment/sotreatment.component';
import { AskexpertRecordFormComponent } from './Components/patient/services/askexpert/askexpert-record-form/askexpert-record-form.component';
import { FaqlistComponent } from './Components/patient/services/faq/faqlist/faqlist.component';
import { DoDontslistComponent } from './Components/patient/services/faq/do-dontslist/do-dontslist.component';
import { MedAdvisorylistComponent } from './Components/patient/services/faq/med-advisorylist/med-advisorylist.component';
import { FaqQueryComponent } from './Components/patient/services/faq/faq-query/faq-query.component';
import { ChatHomeComponent } from './Components/patient/services/chat/chat-home/chat-home.component';

//AskexpertSymptomsComponent
import {AskexpertSearchComponent} from './Components/patient/services/askexpert/askexpert-record-form/askexpert-search/AskexpertSearch.component';
import {AskexpertQueryResponse} from './Components/patient/services/askexpert/askexpert-query-response/askexpert-diagnosis.component';
import { SosComponent } from './Components/patient/services/sos/sos.component';
import { AskexpertQueryComponent } from './Components/patient/services/askexpert/askexpert-record-form/askexpert-query/askexpert-query.component';
import { MedicineIntakeComponent } from './Components/patient/services/medical-planner/medicine-intake/medicine-intake.component';
import { VaccinationPlanComponent } from './Components/patient/services/medical-planner/vaccination-plan/vaccination-plan.component';
import { MedicalPlansListComponent } from './Components/patient/services/medical-planner/medical-plans-list/medical-plans-list.component';
import { CheckupPlanComponent } from './Components/patient/services/medical-planner/checkup-plan/checkup-plan.component';
//service at home
import { ServiceAtHomeComponent } from './Components/patient/services/service-at-home/service-at-home.component'
import { Serhome2component } from './Components/patient/services/service-at-home/servAtHome2/serhome2.component';
import{Serhome3component} from './Components/patient/services/service-at-home/servAtHome3/serhome3.component';
// p2p
import { P2PComponent } from './Components/patient/services/p2-p/p2-p.component';
import {needhelpComponent} from './Components/patient/services/p2-p/needhelp/needhelp.component';
import{bloodregComponent} from './Components/patient/services/p2-p/bloodreg/bloodreg.component';
import{organregComponent} from './Components/patient/services/p2-p/organreg/organreg.component';
import{fundregComponent} from './Components/patient/services/p2-p/fundreg/fundreg.component';
// knowledge base

//
import {FaqComponent} from './Components/patient/services/knowledge-base/faq/faq.component';
import { KnowledgeBaseComponent } from './Components/patient/services/knowledge-base/knowledge-base.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { PatientRegisterationComponent } from './Components/register/patient-registeration/patient-registeration.component';
import { SetPasswordComponent } from './Components/register/set-password/set-password.component';
import { CompletePatientProfileComponent } from './Components/register/patient-registeration/complete-patient-profile/complete-patient-profile.component';
import { DocProfileComponent } from './Components/doctor/dashboard/doc-profile/doc-profile.component';
import { BusinessregComponent } from './Components/businessreg/businessreg.component';

//Doctors Dashboard 
import { DoctorPatientProfileComponent } from './DoctorWorkBenchComponents/doctor-patient-profile/doctor-patient-profile.component';
import { DpComponent } from './dp/dp/dp.component';
//Admin Module
import { AdminLoginComponent } from './AdminComponents/admin-login/admin-login.component';
import { AdmindashboardComponent } from './AdminComponents/admindashboard/admindashboard.component';
import { ProposalsComponent } from './AdminComponents/proposals/proposals.component';
import { PatientProfileComponent } from './DoctorWorkBenchComponents/patient-profile/patient-profile.component';
import { DigitalPriscriptionComponent } from './DoctorWorkBenchComponents/digital-priscription/digital-priscription.component';
import { DocchatComponent } from './DoctorWorkBenchComponents/docchat/docchat.component';
import { PatientsymptomComponent } from './DoctorWorkBenchComponents/patientsymptom/patientsymptom.component';
import { QueuehistoryComponent } from './DoctorWorkBenchComponents/queuehistory/queuehistory.component';
import { PatientuploadsComponent } from './DoctorWorkBenchComponents/patientuploads/patientuploads.component';
import { UserRestrationService } from './Components/register/patient-registeration/user-restration.service';
//
//
const appRoutes: Routes=[
  //login
  {path:'l',component:UserLoginComponent}, 
  {path:'reg',component:PatientRegisterationComponent}, 
  {path:'setPassword',component:SetPasswordComponent},
  {path:'comP',component:CompletePatientProfileComponent},
  {path:'addMember',component:addMemberComponent},
  {path:'businessreg',component:BusinessregComponent},

  {path:'dpprofile',component:DoctorPatientProfileComponent},
  {path:'dp',component:DpComponent},
  {path:'pp',component:PatientProfileComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'proposals', component:ProposalsComponent},
  {path:'doctor',component:DigitalPriscriptionComponent},
  //Home

    //{path:'ram', component:RamComponent },
    
    {path:'p',component:DashboardComponent,
  children:[
    {path:'chatd',component:ChatHomeComponent},
    {path:'chat',component:ChatComponent},
    {path:'cy',component:ChatOptionComponent},
    {path:'h' ,component:PhomelayoutComponent},
    {path:'clab/:id',component:LabComponent},
     {path:'cdiagnosis', component:ChatDiagnosisComponent},
     {path:'csymp',component:SymptomsComponent},
    {path:'ctreat',component:TreatmentComponent},
    {path:'cdiag',component:DiagnosisComponent},
    {path:'mtr', component:MedicalTrackComponent,
      children:[{path:'mtr0', component:Table0Component},
                {path:'mtr1', component:Table1Component},
                {path:'mtr2', component:Table2Component},
                {path:'mtr3', component:Table3Component},
                {path:'mtr4', component:Table4Component}]
    },
    {path:'cmed',component:MedicalRecordsComponent,
    children:[
    //   {path:'cdiagnosis', component:ChatDiagnosisComponent},
    //  {path:'csymp',component:SymptomsComponent},
    // {path:'ctreat',component:TreatmentComponent},
    // {path:'cdiag',component:DiagnosisComponent},
    // {path:'clab',component:LabComponent},
      ]},
  {path:'takeOpinion',component:TakeOpinionComponent},
{path:'oRecord',component:OpinionRcordsFormComponent,
children:
[
     {path:'sosymp',component:SosymptomsComponent},
    {path:'sotreat',component:SotreatmentComponent},
    {path:'sodiag',component:SodiagnosisComponent},
    {path:'solab',component:SolabComponent},
]
},

{path:'docme',component:docmeComponent},
{path:'aexp',component:AskexpertComponent},
{path:'aes/:patient',component:AskexpertSearchComponent},
{path:'aesymp' ,component:AskexpertSymptomsComponent},
{path:'aelab',component:AskexpertLabComponent},
{path:'aediag',component:AskexpertDiagnosisComponent},
{path:'aetreat',component:AskexpertTreatmentComponent},
{path:'aeqr',component:AskexpertQueryResponse},
{path:'aequery',component:AskexpertQueryComponent},
//sos
{path:'sos',component:SosComponent},
//
{path:'aeRecord',component:AskexpertRecordFormComponent,
children:[
// {path:'aesymp' ,component:AskexpertSymptomsComponent},
// {path:'aediag',component:AskexpertDiagnosisComponent},

// {path:'aetreat',component:AskexpertTreatmentComponent}

]
},
{path:'faq/:param',component:FaqComponent,
children:[
  
]},
{path:'faqList',component:FaqlistComponent},
{path:'dosList',component:DoDontslistComponent},
{path:'medAdvList',component: MedAdvisorylistComponent},
{path:'pquery',component:FaqQueryComponent},
{path:'medintake',component:MedicineIntakeComponent},


//{path:'aeRecord',}
  {path:'emer',component:EmergencyComponent},
  {path:'emerself',component:EmerYourselfComponent},
  {path:'emerothers',component:EmerOthersComponent},
  {path:'emergeneral',component:EmerGeneralComponent},

  // knowledge base
  {path:'base', component:KnowledgeBaseComponent},
// children:[
//   {path:'self',component:EmerYourselfComponent},
//   {path:'others',component:EmerOthersComponent}
// ]},
{path:'mt',component:MedicalPlannerComponent},
{path:'vaccination',component:VaccinationPlanComponent},
{path:'mpList',component:MedicalPlansListComponent},
{path:'checkup',component:CheckupPlanComponent},

//service at home
{path:'serAtHome',component:ServiceAtHomeComponent},
  {path:'serhome2',component:Serhome2component},
  {path:'serhome3',component:Serhome3component},
  //find appropriate

  //p2p
  {path:'needhelp',component:needhelpComponent},
  {path:'helpline',component:P2PComponent},
  {path:'bloodreg',component:bloodregComponent},
    {path:'organreg',component:organregComponent},
    {path:'fundreg',component:fundregComponent},
    

  //p2p
  {path:'find',component:FindComponent},
  ]},
//{path:'raj',component:RajComponent},
{path:'tp',component:TestPComponent},
{path:'fc',component:FCComponent},
{path:'d',component:DDashboardComponent,
children:[
  {path:'h',component:DhomelayoutComponent},
  {path:'prof',component:DocProfileComponent}
]},

{path: '', redirectTo:'/fc',pathMatch: 'full' },

    // {path:'csymp',component:SymptomsComponent},
    // {path:'ctreat',component:TreatmentComponent},
    // {path:'cdiag',component:DiagnosisComponent},
    // {path:'clab',component:LabComponent},
    //med records
    // {path:'cmed',component:MedicalRecordsComponent,
    // children:[
    //   {path:'cdiagnosis', component:ChatDiagnosisComponent},
    //  {path:'csymp',component:SymptomsComponent},
    // {path:'ctreat',component:TreatmentComponent},
    // {path:'cdiag',component:DiagnosisComponent},
    // {path:'clab',component:LabComponent},
    //   ]},
  

  
  ]
@NgModule({
  declarations: [
    FCComponent,
    ControlMessagesComponent,addMemberComponent,
    AppComponent, DashboardComponent, AskexpertComponent,ChatOptionComponent,
     ChatComponent, EmergencyComponent,EmerGeneralComponent
,CPreConsultationClinicForm,CPreConsultationDoctorForm,CPreConsultationHospitalForm,CPreConsultationSelfMedicationForm,

      FaqComponent, SearchComponent, FindAppropriateComponent, MedicalPlannerComponent, OrderComponent, MedicalTourismComponent, MedicalTrackComponent, TakeOpinionComponent, MedicalRecordsComponent, SymptomsComponent, DiagnosisComponent, TreatmentComponent, LabComponent, ChatDiagnosisComponent, AskexpertLabComponent, AskexpertSymptomsComponent, AskexpertTreatmentComponent, AskexpertDiagnosisComponent, EmerYourselfComponent, EmerOthersComponent, HomelayoutComponent, PhomelayoutComponent, OpinionRcordsFormComponent, SdiagnosisComponent, SlabComponent, SodiagnosisComponent, SolabComponent, SosymptomsComponent, SotreatmentComponent, AskexpertRecordFormComponent, FaqlistComponent, DoDontslistComponent, MedAdvisorylistComponent, FaqQueryComponent, ChatHomeComponent
 ,AskexpertSearchComponent,AskexpertQueryResponse, docmeComponent, SosComponent, AskexpertQueryComponent,
 AEPreConsultationClinicForm,AEPreConsultationDoctorForm,AEPreConsultationHospitalForm,
 MedicineIntakeComponent 
   ,TestPComponent,TestCComponent, VaccinationPlanComponent, MedicalPlansListComponent, CheckupPlanComponent,
    ServiceAtHomeComponent,Serhome2component,Serhome3component,AEPreConsultationSelfMedicationForm,
    FindComponent,
    P2PComponent,needhelpComponent,bloodregComponent,organregComponent,fundregComponent, KnowledgeBaseComponent, UserLoginComponent, PatientRegisterationComponent, SetPasswordComponent, CompletePatientProfileComponent,Table0Component,Table1Component,Table2Component,Table3Component,Table4Component
  ,
  //doctor
  DhomelayoutComponent,DDashboardComponent, DocProfileComponent, BusinessregComponent, DoctorPatientProfileComponent, DpComponent, AdminLoginComponent, AdmindashboardComponent, ProposalsComponent, PatientProfileComponent, DigitalPriscriptionComponent, DocchatComponent, PatientsymptomComponent, QueuehistoryComponent, PatientuploadsComponent 
  ],
  imports: [
    BrowserModule, 
    HttpModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [UserRestrationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
