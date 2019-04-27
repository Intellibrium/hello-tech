import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-askexpert-diagnosis',
  templateUrl: './askexpert-diagnosis.component.html',
  styleUrls: ['./askexpert-diagnosis.component.css']
})
export class AskexpertDiagnosisComponent implements OnInit {

 docConsult:string;
  aeDiagForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.aeDiagForm=this.formBuilder.group({
        doctorName:['',[Validators.required,Validators.minLength(4)]],
        diseaseName:['',Validators.required],
        date:['',[Validators.required,Validators.min]],
        prescription:[]

    })
  }

  submitDiagnosis(){
    console.log("osgn");
    this.router.navigate(['/p/aeRecord/aelab']);
  }
  
  save(){
this.router.navigate(['/p/aelab']);
  }
}
