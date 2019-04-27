import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-chat-diagnosis',
  templateUrl: './chat-diagnosis.component.html',
  styleUrls: ['./chat-diagnosis.component.css']
})
export class ChatDiagnosisComponent implements OnInit {
doctorConsult:string;
    doctorFrom:string;
    constructor(private router:Router){

    }
    ngOnInit(){
        console.log("ram");
    }
    giveDetails(){
    this.router.navigate(['../p/cmed/clab']);
  }
  

  
}
