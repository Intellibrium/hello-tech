import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

    chatDaignosis:FormGroup;
  constructor(private router:Router, private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {

      this.chatDaignosis=this.formBuilder.group({
        doctorName:['',[Validators.required,Validators.minLength(4)]],
        diseaseName:['',[Validators.pattern('^[0,2][3-5]{4}$')]],
        dateOfConsultaion:[],
        prescription:[]
      })
  }
    saveDiagnosisDetails(){
    this.router.navigate(['./p/clab']);
    }
//
}
