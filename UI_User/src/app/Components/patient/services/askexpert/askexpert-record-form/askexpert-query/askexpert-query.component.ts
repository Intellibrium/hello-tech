import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-askexpert-query',
  templateUrl: './askexpert-query.component.html',
  styleUrls: ['./askexpert-query.component.css']
})
export class AskexpertQueryComponent implements OnInit {
aeSubForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.aeSubForm=this.formBuilder.group({
      subject:[],
      des:[]

    })
  }
  aePostQuery(){
    console.log("d");
    this.router.navigate(['/p/aeqr']);
  }

}
