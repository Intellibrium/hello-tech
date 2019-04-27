import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Http} from '@angular/http';
import{MyFBService} from './fbservice.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {MS} from './ms.service';

@Component({
  selector: 'app-askexpert-treatment',
  templateUrl: './askexpert-treatment.component.html',
  styleUrls: ['./askexpert-treatment.component.css'],
  providers:[MS,MyFBService]
   
})
export class AskexpertTreatmentComponent implements OnInit {
  myrepo:{};
  da;
  myuser:any[]=[]
  aeTreatmentForm:FormGroup;
  constructor(private http:Http,private myservice:MS,private mfb:MyFBService,private formBuilder:FormBuilder,
  private router:Router) { }

  ngOnInit() {

    this.aeTreatmentForm=this.formBuilder.group({
      treatmentName:[],
      from:[],
      till:[]
    })
    // this.myservice.f1().subscribe(data =>{
    // // console.log(data);
    // this.da=data;
    // console.log(this.da);
    // });
    this.getDetails();
}
  getDetails(){
    this.mfb.giveUserDetails().subscribe(responefromAPI =>{
      console.log("iam in controller")
      console.log(responefromAPI);
      this.myuser=responefromAPI;
      
    });
  }

  save(){
    this.router.navigate(['./p/aequery']);//aequery
    
    //this.router.navigate(['./p/aeqr']);//aequery
  }

// a(){
//    this.myservice.f1()
//       .subscribe(data => {

//         console.log("sita");
//         console.log(data);
        
//         console.log("ram");
//       });
// }
}
