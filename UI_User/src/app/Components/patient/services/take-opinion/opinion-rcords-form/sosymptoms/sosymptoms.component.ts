import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sosymptoms',
  templateUrl: './sosymptoms.component.html',
  styleUrls: ['./sosymptoms.component.css']
})
export class SosymptomsComponent implements OnInit {

  soSymptomsForm:FormGroup;
  db:string[]=[];
  constructor(private router:Router,private routes:ActivatedRoute,private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.soSymptomsForm=this.formBuilder.group({
      category:[],
      symptom1:[],
      symptom2:[],
      durationFrom:[],
      durationTill:[],
      details:[]
    })
  }
  submitSymp(ram){
    console.log(ram);
    this.saveDetails(ram,this.getDetails);
  }

  saveDetails(ram,callback){
    console.log("sita");
    setTimeout(()=>{
       console.log("ram saving the data");
        this.db.push("ram");
        console.log(this.db);
        console.log("ram saved the data");
        callback();
    },1000)
  }

  getDetails(){
    console.log("retreiving the data");
    //console.log(this.db);
    console.log("before timeout data");
    setTimeout(()=>{
     // console.log(this.db);
      //console.log(this.db);
      this.gD();
      //console.log("after timeout data");
    },100)
  }
  gD(){
    return this.db;
  }
}
