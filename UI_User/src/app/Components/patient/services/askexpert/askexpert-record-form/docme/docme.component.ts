import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({

    selector: 'docme',
    templateUrl: './docme.html',
    styleUrls: ['./docme.css']

})

export class docmeComponent implements OnInit {

    constructor(private router: Router, private formBuilder: FormBuilder) { }
    askExpMedForm: FormGroup;
    medForm: FormGroup;
    aeMedFormGroup: FormGroup[] = [];
    formsDetailCount: number = 0;
    x: FormGroup;
    notesByDoc: string = " ";

    ngOnInit() {
        this.createMedRecordForm();
        // this.createSymptoms1();

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
        this.askExpMedForm = this.formBuilder.group({
            Medicine_Name: [],
            From_Date: [],
            To_Date: []
        })
        this.aeMedFormGroup.push(this.askExpMedForm);

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