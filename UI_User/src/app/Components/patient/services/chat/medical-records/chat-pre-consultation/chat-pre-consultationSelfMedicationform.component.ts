import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PrevioiusConsultation} from '../medical-records-component/previousConsultation-doctor.service';

@Component({
    selector:'c-self-form',
    templateUrl:'./chat-pre-consultationSelfMedicationform.html',
    providers:[PrevioiusConsultation]
})
export class CPreConsultationSelfMedicationForm implements OnInit{
//AEPreConsultationSelfMedicationForm
selfMedicationForm:FormGroup;
    medBySelf:string;
    askExpMedForm: FormGroup;
    medForm: FormGroup;
    chatSelfMedFormGroup: FormGroup[] = [];
    formsDetailCount: number = 0;
 
 
//  medBySelf:string;
 bySelfForm:FormGroup;
 record:Object[]=[];

    constructor(private formBuilder:FormBuilder,private router:Router,private pc:PrevioiusConsultation){}

ngOnInit(){
       this.createMedRecordForm();
    }

ngOnChanges() {
        console.log("jsm");
        console.log(this.chatSelfMedFormGroup.values);
    }


    
    createMedRecordForm() {
        this.selfMedicationForm=this.formBuilder.group({
      medicine_name:[],
      timesADay:[]
      
// docName:[]
    })
        this.chatSelfMedFormGroup.push(this.selfMedicationForm);

    }
    
    addchatSelfMedRecords() {

        this.createMedRecordForm();
    }
    
    savetoDB(param) {
        //console.log(this.symptomsFormGroup[0]);
        console.log(this.chatSelfMedFormGroup);
        //this.router.navigate(['./p/cmed']);
        if (this.formsDetailCount == 0) { }
        console.log(param);
    }
    rajesh() {

    }

    


savechatRecordBySelf(){
   console.log(this.chatSelfMedFormGroup);
    this.router.navigate(['./p/chatd']);
  }

}
//askexpert-pre-consultationSelfMedicationform.html