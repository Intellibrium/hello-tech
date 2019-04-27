import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-checkup-plan',
  templateUrl: './checkup-plan.component.html',
  styleUrls: ['./checkup-plan.component.css']
})
export class CheckupPlanComponent implements OnInit {

  
checkupType:string;
dailyCheckup:FormGroup;
weeklyCheckup:FormGroup;
monthlyCheckup:FormGroup;
customCheckup:FormGroup;


weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursady","Friday","Saturday"];
  weekdayM:string="null";
  ram:string="email";
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.dailyCheckup=this.formBuilder.group({
      startDate:[],
      time:[],
      note:[],
      place:[],
      endDate:[],
      email:[],
      msg:[],
      call:[]
    });
    this.weeklyCheckup=this.formBuilder.group({
       startDate:[],
      time:[],
      note:[],
      place:[],
      email:[],
      msg:[],
      call:[]
     
    });
    this.monthlyCheckup=this.formBuilder.group({
       startDate:[],
      time:[],
      note:[],
     place:[],
     email:[],
      msg:[],
      call:[]
     
    });
    this.customCheckup=this.formBuilder.group({
       startDate:[],
      time:[],
      note:[],
      
      place:[],email:[],
      msg:[],
      call:[]
     
    })
  }
planDailyCheckup(){
  console.log(this.dailyCheckup.value.email);
   console.log(this.dailyCheckup.value.call);
    console.log(this.dailyCheckup.value.msg);
//this.router.navigate(['./p/mt']);
}

    
planMonthlyCheckup(){
    console.log("");
    this.router.navigate(['./p/mt']);
}
  planWeeklyCheckup(){
    console.log("");
    this.router.navigate(['./p/mt']);
}
  planCustomCheckup(){
    console.log("");
    this.router.navigate(['./p/mt']);
}
}