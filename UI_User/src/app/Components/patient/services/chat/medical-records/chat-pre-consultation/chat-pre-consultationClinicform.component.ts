import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {PrevioiusConsultation} from '../medical-records-component/previousConsultation-doctor.service';

@Component({
    selector:'c-clinic-form',
    templateUrl:'./chat-pre-consultationClinicform.html',
        providers:[PrevioiusConsultation]

})
export class CPreConsultationClinicForm implements OnInit{
//
    clinicDetails:FormGroup;
    docDetails:FormGroup;
    doctorConsult:string;
    doctorFrom:string;
    paramTo:any;
    // clinicDetails:FormGroup;
 hospitalDetails:FormGroup;
 medBySelf:string;
 bySelfForm:FormGroup;
 record:Object[]=[];
    constructor(private formBuilder:FormBuilder,private router:Router,private pc:PrevioiusConsultation){}

    ngOnInit(){
        this.clinicDetails=this.formBuilder.group({
        clinicName:[],
        docPlace:[],
      dateOfConsultation:[],
      prescription:[]

        //docName:[]
    });
    }
  giveDetailsOfClinic(clinicInfo){
console.log(clinicInfo);
this.record=[];
this.record.push(clinicInfo);
if(this.pc.consultedWithDoctorC(this.record)){
this.router.navigate(['../p/clab',"clinic"]);
}

  }
}
