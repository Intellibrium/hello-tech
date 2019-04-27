import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-priscription',
  templateUrl: './digital-priscription.component.html',
  styleUrls: ['./digital-priscription.component.css']
})
export class DigitalPriscriptionComponent implements OnInit {

  //User Details

  Fname: string="Mamatha ";
  Lname: string="vani";
  FirstCareId: string="Fc_012";
  PatientId: string="P/10";
  Email: string="vani@gmail.com";
  Mobile: string="9893892893";
  Location: string="Bangalore";
  Gender: string="Female";
  oldBGroup: string="o-";
  dob: string="03/01/1996";
  
  // patient pre symptoms
  symptom:string;
  from:any;
  to:any;

  


  constructor() { }

  ngOnInit() {
  }

}
