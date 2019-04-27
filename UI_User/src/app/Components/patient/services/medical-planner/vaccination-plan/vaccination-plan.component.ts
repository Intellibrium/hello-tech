import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-vaccination-plan',
  templateUrl: './vaccination-plan.component.html',
  styleUrls: ['./vaccination-plan.component.css']
})
export class VaccinationPlanComponent implements OnInit {
vaccinationType:string;
dailyVaccination:FormGroup;
weeklyVaccination:FormGroup;
monthlyVaccination:FormGroup;
customVaccination:FormGroup;


weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  weekdayM:string="null";
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.dailyVaccination=this.formBuilder.group({
      startDate:[],
      time:[],
      note:[],
      place:[],
      endDate:[],
      email:[],
      msg:[],
      call:[]//
    });
    this.weeklyVaccination=this.formBuilder.group({
       startDate:[],
      time:[],
      note:[],
      place:[],
      email:[],
      msg:[],
      call:[]
     
    });
    this.monthlyVaccination=this.formBuilder.group({
       startDate:[],
      time:[],
      note:[],
      place:[],
      email:[],
      msg:[],
      call:[]
     //place:[]
     
    });
    this.customVaccination=this.formBuilder.group({
       startDate:[],
      time:[],
      note:[],
      place:[],
      email:[],
      msg:[],
      call:[]
     // place:[]
     
    })
  }
planDailyVaccination(){
  console.log(this.dailyVaccination.value);
   
this.router.navigate(['./p/mt']);
}

    
planMonthlyVaccination(){
  console.log(this.monthlyVaccination.value);
    console.log("");
    this.router.navigate(['./p/mt']);
}
  planWeeklyVaccination(){
    console.log(this.weeklyVaccination.value);
    console.log("");

    this.router.navigate(['./p/mt']);
}
  planCustomVaccination(){
    console.log(this.customVaccination.value);
    console.log("");
    this.router.navigate(['./p/mt']);
}
}
