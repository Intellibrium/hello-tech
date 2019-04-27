import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl,ReactiveFormsModule} from '@angular/forms';
import { ValidationService } from './validation.service';




@Component({
  selector: 'app-patient-registeration',
  templateUrl: './patient-registeration.component.html',
  styleUrls: ['./patient-registeration.component.css'],
  providers:[ValidationService]
})
export class PatientRegisterationComponent implements OnInit {
myForm:FormGroup;

name:string;
lname:string;
email:string;
gender:string;
DOB:string;
mobile:string;
blood:string;

  

  userForm: any;
  
   constructor(private formBuilder: FormBuilder,private router: Router,private Route: ActivatedRoute) {
        this.userForm = this.formBuilder.group({

      'name': ['', [Validators.required, ValidationService.fnameValidator]],
      'lname': ['', [Validators.required, ValidationService.lnameValidator]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'gender': ['', [Validators.required]],
      'DOB' : ['', [Validators.required]],
      'mobile' : ['', [Validators.required]],
      'primaryCity':['',[Validators.required]],
      'pinCode':['',[Validators.required]],
      'blood' : ['', [Validators.required]],



      //'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
    
    console.log(this.userForm);
  }

  
  ngOnInit(){
    
  
}



  
  saveUser() {
  
  this.name=this.userForm.value.name;
  this.lname=this.userForm.value.lname;
  this.gender=this.userForm.value.gender;
  this.DOB=this.userForm.value.DOB;
  this.email=this.userForm.value.email;
  this.mobile=this.userForm.value.mobile;
  this.blood=this.userForm.value.blood;

  console.log(this.name);
  console.log(this.lname);
  console.log(this.gender);
  console.log(this.DOB);
  console.log(this.email);
  console.log(this.mobile);
  console.log(this.blood);



  /*this.userForm= new FormGroup({
        name:new FormControl(),
        lname:new FormControl(),
        gender:new FormControl(),
        DOB:new FormControl(),
        email:new FormControl(),
        mobile:new FormControl(),
        blood:new FormControl() 
  });*/

    if (this.userForm.dirty && this.userForm.valid) {
      /*alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);*/
    }
  }

 today = new Date().toJSON().split('T')[0];

   otp: string= "";
   newotp :string= "12345";
   nmod: string;
   mod: string="modal";
 

  close(id:string)
  {
  console.log('OTP You have entered:', this.otp);
  console.log('OTP Required:', this.newotp);

  if(this.newotp==this.otp)
  {
  console.log('Currect OTP..');
this.nmod=this.mod;
  
  this.router.navigate(['./setPassword']);

  }

  else
  {
console.log('Wrong OTP..');
alert('Wrong OTP.. Try again');
  this.router.navigate(['../reg']);

  }
}

col:string;
sent:string;
reenter:string; 
send()
{
  this.col="#ff8a82";
  this.sent="OTP Sent";
  this.reenter="Please enter the OTP";
//   'name'
// 'lname'
// 'email': 
// 'gender':
// 'DOB' : 
// 'mobile' : 
// 'primaryCity':
// 'pinCode':
// 'blood Group' :

}
}

