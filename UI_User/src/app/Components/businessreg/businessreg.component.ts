import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl,ReactiveFormsModule} from '@angular/forms';
import { ValidationsService } from './validations.service';
@Component({
  selector: 'app-businessreg',
  templateUrl: './businessreg.component.html',
  styleUrls: ['./businessreg.component.css'],
  providers:[ValidationsService]
})

export class BusinessregComponent implements OnInit {
  businessForm:FormGroup;




select:any;
entityname:string;
propritor:string;
contact:string;
email:string;
contactperson:string;
contactpersonnum:string;
cpemail:string;
gstin:string;
location:string;




  constructor(private formBuilder: FormBuilder,private router: Router,private Route: ActivatedRoute) {
    this.businessForm = this.formBuilder.group({
      
      'select': ['', [Validators.required]],
      'entityname': ['', [Validators.required]],
      'propritor': ['', [Validators.required]],
      'contact': ['', [Validators.required]],
      'email' : ['', [Validators.required, ValidationsService.emailValidator]],
      'contactperson' : ['', [Validators.required]],
      'contactpersonnum':['',[Validators.required]],
      'cpemail':['',[Validators.required, ValidationsService.emailValidator]],
      'gstin' : ['', [Validators.required]],
      'location' :['',[Validators.required]],
    });

    console.log(this.businessForm);

  }

  ngOnInit() {
    /*this.businessForm= new FormGroup({
        select:new FormControl(),
        entityname:new FormControl(),
        
  });

  
  this.select=this.businessForm.value.select;
  this.entityname=this.businessForm.value.entityname;
  
  console.log(this.select);
  console.log(this.entityname);*/
console.log("hi");
console.log("welcome");


  }


  Registration() {

    console.log("welcome");
  
    this.select=this.businessForm.value.select;
    this.entityname=this.businessForm.value.entityname;
    this.propritor=this.businessForm.value.propritor;
    this.contact=this.businessForm.value.contact;
    this.email=this.businessForm.value.email;
    this.contactperson=this.businessForm.value.contactperson;
    this.contactpersonnum=this.businessForm.value.contactpersonnum;
    this.cpemail=this.businessForm.value.cpemail;
    this.gstin=this.businessForm.value.gstin;
    //this.location=this.businessForm.location;

  
    console.log(this.select);
    console.log(this.entityname);
    console.log(this.propritor);
    console.log(this.contact);
    console.log(this.contactperson);
    console.log(this.contactpersonnum);
    console.log(this.cpemail);
    console.log(this.gstin);
    console.log(this.location);
    if (this.businessForm.dirty && this.businessForm.valid) {
      /*alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);*/
    }
  }

}
