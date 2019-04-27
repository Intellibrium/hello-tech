import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
 public input: any;
    public constructor(private http: Http, private router: Router) {
        this.input = {
            "name": "",
            "account_id": "",
            "patient_id": "",
            "contact": "",
            "gender":"",
            "dob":"",
            "bloodgroup":"",
            "location":"",
        };
    }


  ngOnInit() {
  }

}
