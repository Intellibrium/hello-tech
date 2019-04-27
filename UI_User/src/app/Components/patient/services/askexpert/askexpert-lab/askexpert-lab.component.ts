import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-askexpert-lab',
  templateUrl: './askexpert-lab.component.html',
  styleUrls: ['./askexpert-lab.component.css']
})
export class AskexpertLabComponent implements OnInit {

  askExpertLabForm:FormGroup;
  constructor(private router:Router, private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.askExpertLabForm=this.formBuilder.group({
      testName:[],
      referedByDoctor:[],
      observation:[],
      date:[],
      reports:[]
    })
  }
  saveLabDetails(param){

this.router.navigate(['./p/oRecord/sotreat']);
///p/oRecord/sotreat

  }
}
