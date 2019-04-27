import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-medicine-intake',
  templateUrl: './medicine-intake.component.html',
  styleUrls: ['./medicine-intake.component.css']
})
export class MedicineIntakeComponent implements OnInit {

  dailyIntake:FormGroup;
  monthlyIntake:FormGroup;
  
  medPlanType:string;
  intakeType:string;
  timesADay:number;
  t:number;
  dailyTime:Object[]=[];
  notesIntake:Object[]=[];
  
  count:number;
  timeslot:number[];
  r:dailyMed;

  weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
  weekdayM:string="null";
  constructor(private router:Router,private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.dailyIntake=this.formBuilder.group({
      startDate:[],
      times:[],
      inTakeTime:[],
      endDate:[],
      note:['',[Validators.required,Validators.pattern('^2[1-5]')]]
    });
    this.monthlyIntake=this.formBuilder.group({
      startDate:[],
      time:[],
      notes:[],
      endDate:[]
    })
  }
  medIntake(){
    this.router.navigate(['./p/medintake']);
  }
  osgn(param){
    
      this.t=parseInt(param);
      this.timeslot=new Array(this.t);
      
  }
    planDailyIntake(){
      console.log(this.dailyIntake.value);
      console.log("time slot");
      console.log(this.dailyTime);
      console.log(this.notesIntake);
     this.r={
        startDate:'1',
       timesAsDay:'3',
      timeSlots:['ram'],
    Notes:['a','b','c']
      }
  console.log(this.r);
      
    }
planMonthlyIntake(){
    console.log("");
    this.router.navigate(['./p/mt']);
}
  planWeeklyIntake(){
    console.log("");
    this.router.navigate(['./p/mt']);
}
structure(){


}



//add

editMode:boolean = false;
   title = 'Times point';
  name ="Medicine Name";
  val ="defual";
  items = [];
  update=false;
  onKeyP(event){
    console.log(event.target.value);
    this.val=event.target.value
  }
  
  addItem(name){

    if(name){
      let s = {
        name : name,
        editMode : false,
      }
    this.items.push(s);
console.log(name)
    }
    console.log(this.items);
  }
  deleteItem(item){
    console.log(item);
    var index = this.items.indexOf(item);
    this.items.splice(index,1);
  }
  
  editItem(item){
    this.update =true;
    console.log(item);
    var index = this.items.indexOf(item);
    this.val=this.items[index];
    
  }
  
  updateItem(){
    
  }



    //medintake

}
  interface dailyMed{
    startDate:string;
    timesAsDay:string;
    timeSlots:string[];
    Notes:any[];

  }
