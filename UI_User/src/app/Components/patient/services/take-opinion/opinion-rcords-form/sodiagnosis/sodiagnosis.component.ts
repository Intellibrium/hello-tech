import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sodiagnosis',
  templateUrl: './sodiagnosis.component.html',
  styleUrls: ['./sodiagnosis.component.css']
})
export class SodiagnosisComponent implements OnInit {

  askExpertDaignosis:FormGroup;
  constructor(private router:Router, private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {

      this.askExpertDaignosis=this.formBuilder.group({
        doctorName:[],
        diseaseName:[],
        dateOfConsultaion:[],
        prescription:[]
      })
  }
    saveDiagnosisDetails(){
    this.router.navigate(['./p/oRecord/solab']);
    ///p/oRecord/sodiag
    }

}
