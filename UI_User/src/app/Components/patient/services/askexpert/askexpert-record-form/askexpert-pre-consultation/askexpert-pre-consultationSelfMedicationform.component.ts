import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
    selector:'ae-self-form',
    templateUrl:'./askexpert-pre-consultationSelfMedicationform.html'
})
export class AEPreConsultationSelfMedicationForm implements OnInit{
//AEPreConsultationSelfMedicationForm
    selfMedicationForm:FormGroup;
    medBySelf:string;
    askExpMedForm: FormGroup;
    medForm: FormGroup;
    aeMedFormGroup: FormGroup[] = [];
    formsDetailCount: number = 0;
    x: FormGroup;
    notesByDoc: string = " ";
  constructor(private router: Router, private formBuilder: FormBuilder) { }


    ngOnInit(){
       this.createMedRecordForm();
    }

giveDetailsOfHospital(hospitalInfo){
    console.log(hospitalInfo);
    this.router.navigate(['../p/aelab']);
  }
saveRecordBySelf(param){
    console.log(this.aeMedFormGroup);
        console.log(this.notesByDoc);

        if (this.formsDetailCount == 0) { }
        console.log(param);
        this.router.navigate(['../p/aetreat']);
    
    //this.router.navigate(['../p/aetreat']);
  }

    

    
    ngOnChanges() {
        console.log("jsm");
        console.log(this.aeMedFormGroup.values);
    }


    saveSympToAE() {
        console.log("osgn");
        this.router.navigate(['/p/aeRecord']);
    }//

    createMedRecordForm() {
        this.selfMedicationForm=this.formBuilder.group({
      medicine_name:[],
      timesADay:[]
      
// docName:[]
    })
        this.aeMedFormGroup.push(this.selfMedicationForm);

    }
    addMedReecords() {

        this.createMedRecordForm();
    }
    createSymptoms1() {
        this.medForm = this.formBuilder.group({
            symptom: [],
            from: [],
            till: [],
            details: []
        })
        this.aeMedFormGroup.push(this.medForm);
    }
    savetoDB(param) {
        //console.log(this.symptomsFormGroup[0]);
        console.log(this.aeMedFormGroup);
        //this.router.navigate(['./p/cmed']);
        if (this.formsDetailCount == 0) { }
        console.log(param);
    }
    rajesh() {

    }

    saveMedDetails(param) {
        console.log(this.aeMedFormGroup);
        console.log(this.notesByDoc);

        if (this.formsDetailCount == 0) { }
        console.log(param);
        this.router.navigate(['../p/aetreat']);

    }
}

//askexpert-pre-consultationSelfMedicationform.html