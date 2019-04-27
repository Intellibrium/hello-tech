import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-solab',
  templateUrl: './solab.component.html',
  styleUrls: ['./solab.component.css']
})
export class SolabComponent implements OnInit {

 takeOpinionLabForm:FormGroup;
  constructor(private router:Router, private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.takeOpinionLabForm=this.formBuilder.group({
      testName:[],
      referedByDoctor:[],
      observation:[],
      date:[],
      reports:[]
    })
  }
  saveLabDetails(param){

this.router.navigate(['./p/oRecord/sotreat']);

  }//

}
