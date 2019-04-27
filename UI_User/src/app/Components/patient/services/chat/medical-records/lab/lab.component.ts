import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
//
chatLabForm:FormGroup;
labTest:string;
  constructor(private router:Router, private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.chatLabForm=this.formBuilder.group({
      testName:[],
      observation:[],
      date:[],
      reports:[]
    })
  }
  saveDiagnosisDetails(param){
sessionStorage.setItem("labReport",JSON.stringify(param));
this.router.navigate(['./p/ctreat']);

  }//

}
