import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PrevioiusConsultation} from '../medical-records-component/previousConsultation-doctor.service';

@Component({
    selector:'c-hospital-form',
    templateUrl:'./chat-pre-consultationHospitalform.html',
    providers:[PrevioiusConsultation]
})
export class CPreConsultationHospitalForm implements OnInit{

    hospitalDetails:FormGroup;

    clinicDetails:FormGroup;
    docDetails:FormGroup;
    doctorConsult:string;
    doctorFrom:string;
    paramTo:any;
    // clinicDetails:FormGroup;
//  hospitalDetails:FormGroup;
 medBySelf:string;
 bySelfForm:FormGroup;
 record:Object[]=[];
    constructor(private formBuilder:FormBuilder,private router:Router,private pc:PrevioiusConsultation){}

    ngOnInit(){
       this.hospitalDetails=this.formBuilder.group({
      hospitalName:[],
      docPlace:[],
      dateOfConsultation:[],
      prescription:[]
// docName:[]
    })
    }

giveDetailsOfHospital(hospitalInfo){
    this.record=[];
this.record.push(hospitalInfo);
if(this.pc.consultedWithDoctorH(this.record)){
  console.log(this.record);
  this.router.navigate(['../p/clab',"hospital"]);
} 
}
}