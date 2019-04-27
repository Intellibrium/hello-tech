import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-askexpert-diagnosis',
  templateUrl: './askexpertQueryResponse.component.html',
  styleUrls: ['./askexpertQueryResponse.component.css']
})
export class AskexpertQueryResponse implements OnInit {
aeDiagForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    
    
  }
  save(){

  }

}
