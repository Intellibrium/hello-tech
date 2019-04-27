import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
    selector:'ae-hospital-form',
    templateUrl:'./askexpert-pre-consultationHospitalform.html'
})
export class AEPreConsultationHospitalForm implements OnInit{

    hospitalDetails:FormGroup;

    constructor(private formBuilder:FormBuilder,private router:Router){}

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
    console.log(hospitalInfo);
    this.router.navigate(['../p/aelab']);
  }

}