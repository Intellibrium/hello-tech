import { Component, OnInit } from '@angular/core';
//import {} from '@angular/router';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-askexpert-lab',
  templateUrl: './askexpert-lab.component.html',
  styleUrls: ['./askexpert-lab.component.css']
})
export class AskexpertLabComponent implements OnInit {

  aeLabForm:FormGroup;
  labTest:string;
  constructor(private router:Router, private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  

  submitLabReports(){
    console.log("osgn");
    this.router.navigate(['/p/aeRecord/docme']);
  }
  ngOnInit() {
    this.aeLabForm=this.formBuilder.group({
      testName:['',[Validators.required]],
      observation:[],
      date:[],
      reports:[]
    })
  }
  saveDiagnosisDetails(param){

this.router.navigate(['./p/docme']);

  }//
}
