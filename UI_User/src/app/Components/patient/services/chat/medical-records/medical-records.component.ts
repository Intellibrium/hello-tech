import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {PrevioiusConsultation} from './medical-records-component/previousConsultation-doctor.service';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css'],
  providers:[PrevioiusConsultation]
})
export class MedicalRecordsComponent implements OnInit {
doctorConsult:string;
doctorFrom:string;
 paramTo:any;
 docDetails:FormGroup;
 clinicDetails:FormGroup;
 hospitalDetails:FormGroup;
 medBySelf:string;
 bySelfForm:FormGroup;
 record:Object[]=[];
 doc:string="consulted with doctor"
  constructor(private router:Router,private routes:ActivatedRoute,private formBuilder:FormBuilder,private pc:PrevioiusConsultation) { }

  ngOnInit() {
    this.docDetails=this.formBuilder.group({
      docName:[]
    });
    this.clinicDetails=this.formBuilder.group({
        clinicName:[],
        place:[],
        dateOfConsultation:[]
    });
    this.hospitalDetails=this.formBuilder.group({
      hospitalName:[],
         place:[],
        dateOfConsultation:[]
    })
      this.bySelfForm=this.formBuilder.group({
        med:[],
        timesaDay:[],
         med2:[],
        timesaDay2:[],
         med3:[],
        timesaDay3:[]
      })
  }

  f1(){
    this.router.navigate(['./ctreat']);
  }
  giveDetails(docInfo){
    console.log(docInfo);
    //console.log(param.target.value);
    //this.paramTo=param.target.value;
    this.paramTo=docInfo.docName;
    let id=this.paramTo;
    console.log(docInfo);
    this.record=[];
    this.record.push(docInfo);
    if(this.pc.consultedWithDoctor(this.record)){
       console.log(this.record);
       this.router.navigate(['../p/clab',"doctor"]);
    }
   
    
  }
  giveDetailsOfClinic(clinicInfo){
console.log(clinicInfo);
this.record=[];
this.record.push(clinicInfo);
if(this.pc.consultedWithDoctorC(this.record)){
this.router.navigate(['../p/clab',"clinic"]);
}
//this.router.navigate(['../p/clab',"clinic"]);
  }
  giveDetailsOfHospital(hospitalInfo){
    this.record=[];
this.record.push(hospitalInfo);
if(this.pc.consultedWithDoctorH(this.record)){
  console.log(this.record);
  this.router.navigate(['../p/clab',"hospital"]);
} 

 
    // console.log(hospitalInfo);
    //this.router.navigate(['../p/clab',"hospital"]);
  }
  saveRecordBySelf(){
    console.log(this.bySelfForm.value);
    this.record=[];
    this.record.push(this.bySelfForm.value);
    console.log(this.record);
    //this.router.navigate(['./p/chat']);
  }
}
