import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-askexpert-symptoms',
  templateUrl: './askexpert-symptoms.component.html',
  styleUrls: ['./askexpert-symptoms.component.css']
})
export class AskexpertSymptomsComponent implements OnInit {

  

 askExpSymptomsForm:FormGroup;
  symptomsForm1:FormGroup;
  symptomsFormGroup:FormGroup[]=[];
  formsDetailCount:number=0;
  x:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
    this.createSymptoms();
    this.createSymptoms1();
     
  }
  ngOnChanges(){
    console.log("jsm");
    console.log(this.symptomsFormGroup.values);
  }


  saveSympToAE(){
    console.log("osgn");
    this.router.navigate(['/p/aeRecord']);
  }//
  
  createSymptoms(){
    this.askExpSymptomsForm=this.formBuilder.group({
      symptom:['',Validators.required],
      from:[],
      till:[],
      details:[]

    })
    this.symptomsFormGroup.push(this.askExpSymptomsForm);
    
  }
  addSymptoms(){
    
    this.createSymptoms();
  }
  createSymptoms1(){
    this.symptomsForm1=this.formBuilder.group({
       symptom:[],
       from:[],
    till:[],
       details:[]

    })
      this.symptomsFormGroup.push(this.symptomsForm1);
}
    saveSymp(param){
      //console.log(this.symptomsFormGroup[0]);
     console.log(this.symptomsFormGroup);
     this.router.navigate(['./p/cmed']);
      if(this.formsDetailCount==0){}
console.log(param);
    }
rajesh(){
  
}
}
