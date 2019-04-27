import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'doc-profile',
  templateUrl: './doc-profile.component.html',
  styleUrls: ['./doc-profile.component.css']
})
export class DocProfileComponent implements OnInit {

  constructor() { }
  ram:string;
  sita:boolean;
   imageSrc= '/assets/images/medical.png';
   oldFname: string="Raj";
        oldLname: string="Sharma";
        oldAccountId: string="Fc_012";
        oldPatientId: string="P/10";
        oldEmail: string="raj@gmail.com";
        oldMobile: string="9893892893";
        oldAddress: string="Bangalore";
        oldEmobile: string="8727874828";
        oldAmobile: string="8508383388";
        oldGender: string="Male";
        oldBGroup: string="A+";
        oldDOB: string="01/01/2001";
        oldSubPatientId1:string="P/11";
        oldSubPatientId2:string="P/12";
        oldSubPatientId3:string="P/13"; 
  @Input() doc:string;
  ngOnInit() {
    console.log(this.doc);
  }
raj(){
  this.sita=!this.sita;
}
}
