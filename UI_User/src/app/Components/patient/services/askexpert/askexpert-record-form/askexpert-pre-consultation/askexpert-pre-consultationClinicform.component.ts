import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
    selector:'ae-clinic-form',
    templateUrl:'./askexpert-pre-consultationClinicform.html'
})
export class AEPreConsultationClinicForm implements OnInit{

    clinicDetails:FormGroup;
    constructor(private formBuilder:FormBuilder,private router:Router){}

    ngOnInit(){
        this.clinicDetails=this.formBuilder.group({
        clinicName:[],
        docPlace:[],
      dateOfConsultation:[],
      prescription:[]

        //docName:[]
    });
    }
giveDetailsOfClinic(){
    this.router.navigate(['../p/aelab']);
}

}
//askexpert-pre-consultationDoctorform