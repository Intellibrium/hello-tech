import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
treatmentByDoctor:string;
  chatTreatmentForm:FormGroup;
    chatMedForm: FormGroup;
    medForm: FormGroup;
    chatMedFormGroup: FormGroup[] = [];
    formsDetailCount: number = 0;
    x: FormGroup;
    notesByDoc: string = " ";
  constructor(private router:Router, private routes:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit() {
     this.createMedRecordForm();
  }
  saveTreatmentDetails(param){
    
    console.log(this.chatMedFormGroup);
this.router.navigate(['./p/chatd']);

  }
ngOnChanges() {
        console.log("jsm");
        console.log(this.chatMedFormGroup.values);
    }
    createMedRecordForm() {
        this.chatMedForm = this.formBuilder.group({
            Medicine_Name: [],
            From_Date: [],
            To_Date: []
        })
        this.chatMedFormGroup.push(this.chatMedForm);

    }
    addMedReecords() {

        this.createMedRecordForm();
    }
    
    savetoDB(param) {
        //console.log(this.symptomsFormGroup[0]);
        console.log(this.chatMedFormGroup);
        //this.router.navigate(['./p/cmed']);
        if (this.formsDetailCount == 0) { }
        console.log(param);
    }
    rajesh() {

    }

    saveMedDetails(param) {
        console.log(this.chatMedFormGroup);
        console.log(this.notesByDoc);

        if (this.formsDetailCount == 0) { }
        console.log(param);
        this.router.navigate(['../p/aetreat']);

    }

}
