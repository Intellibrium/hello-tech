import { Component, OnInit } from '@angular/core';
import{Router,Routes} from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-askexpert',
  templateUrl: './askexpert.component.html',
  styleUrls: ['./askexpert.component.css']
})
export class AskexpertComponent implements OnInit {

  askExpertPatient:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.askExpertPatient=this.formBuilder.group({
        patient:['',[Validators.required]]
    })
  }
  giveDetailsToExpert(){
      //this.router.navigate(['./p/aeRecord']);
      this.router.navigate(['./p/aes']);
      ///aeRecord/aesymp
  }
    savePatientDetails(patient){
       this.router.navigate(['./p/aes',patient.patient]);
    }

}
