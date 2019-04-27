import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-medical-planner',
  templateUrl: './medical-planner.component.html',
  styleUrls: ['./medical-planner.component.css']
})
export class MedicalPlannerComponent implements OnInit {
  medicineIntakeForm:FormGroup;
  medPlanType:string;
  intakeType:string;
  timesADay:number;
  t:number;
  count:number;
  timeslot:number[];

  weekDays=["sun","mon","tue","wed","thu","fri","sat"];
  weekdayM:string="null";
  constructor(private router:Router,private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.medicineIntakeForm=this.formBuilder.group({

    });
  }
  medIntake(){
    this.router.navigate(['./p/medintake']);
  }
  vaccination(){
    this.router.navigate(['./p/vaccination']);
  }
  checkup(){
    this.router.navigate(['./p/checkup']);
  }
  osgn(param){
    
      this.t=parseInt(param);
      this.timeslot=new Array(this.t);
      
  }
    //medintake

}
