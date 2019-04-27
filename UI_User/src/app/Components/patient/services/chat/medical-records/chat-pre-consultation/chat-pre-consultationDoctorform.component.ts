import {Component,OnInit,Input} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PrevioiusConsultation} from '../medical-records-component/previousConsultation-doctor.service';

@Component({
    selector:'c-doctor-form',
    templateUrl:'./chat-pre-consultationDoctorform.html',
    providers:[PrevioiusConsultation]
})
export class CPreConsultationDoctorForm implements OnInit{

    @Input() subject:string;
    docDetails:FormGroup;
    doctorConsult:string;
    doctorFrom:string;
    paramTo:any;

// doctorConsult:string;
// doctorFrom:string;
//  paramTo:any;
//  docDetails:FormGroup;
 clinicDetails:FormGroup;
 hospitalDetails:FormGroup;
 medBySelf:string;
 bySelfForm:FormGroup;
 record:Object[]=[];
    constructor(private formBuilder:FormBuilder,private router:Router,private pc:PrevioiusConsultation){}

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
    console.log(docInfo);
    this.record=[];
    this.record.push(docInfo);
    if(this.pc.consultedWithDoctor(this.record)){
       console.log(this.record);
       this.router.navigate(['../p/clab',"doctor"]);
    }
   
    
  }



}