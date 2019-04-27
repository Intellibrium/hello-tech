import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-askexpert-record-form',
  templateUrl: './askexpert-record-form.component.html',
  styleUrls: ['./askexpert-record-form.component.css']
})
export class AskexpertRecordFormComponent implements OnInit {
doctorConsult:string;
doctorFrom:string;
 paramTo:any;
 docDetails:FormGroup;
 clinicDetails:FormGroup;
 hospitalDetails:FormGroup;
 cod:string="consulted to a doctor";
  constructor(private router:Router,private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {
    
  }
giveDetails(docInfo){
    console.log(docInfo);
    //console.log(param.target.value);
    //this.paramTo=param.target.value;
    this.paramTo=docInfo.docName;
    let id=this.paramTo;
    this.router.navigate(['../p/aelab']);
  }
  giveDetailsOfClinic(clinicInfo){
console.log(clinicInfo);
this.router.navigate(['../p/aelab']);
  }
  giveDetailsOfHospital(hospitalInfo){
    console.log(hospitalInfo);
    this.router.navigate(['../p/aelab']);
  }
  saveRecordBySelf(){
    this.router.navigate(['../p/aetreat']);
  }
}//
