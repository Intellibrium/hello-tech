import {Component,OnInit,Input} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
    selector:'ae-doctor-form',
    templateUrl:'./askexpert-pre-consultationDoctorform.html'
})
export class AEPreConsultationDoctorForm implements OnInit{

    @Input() subject:string;
    docDetails:FormGroup;
    doctorConsult:string;
    doctorFrom:string;
    paramTo:any;


    constructor(private formBuilder:FormBuilder,private router:Router){}

    ngOnInit(){
        this.docDetails=this.formBuilder.group({
      docName:['',Validators.required],
      docPlace:[],
      dateOfConsultation:['',Validators.required],
      prescription:[]

    });

    console.log("subject "+this.subject);
        //docName:[]
   
    }
    giveDetails(docInfo){
    console.log(docInfo);
    //console.log(param.target.value);
    //this.paramTo=param.target.value;
    this.paramTo=docInfo.docName;
    let id=this.paramTo;
    this.router.navigate(['../p/aelab']);
  }



}