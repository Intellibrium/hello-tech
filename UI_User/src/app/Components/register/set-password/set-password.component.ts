import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

	ngOnInit(){}
  newOtp: number=54321;
otp: number;

check()
{
	this.newOtp=this.otp;
	console.log(this.newOtp);
	if(this.otp==this.newOtp)
	{
      
	}
	else
	{

	}

}
Alrt()
{
	alert('Registration SuccessFull.. ');
}

userForm: any;
  
  constructor(private formBuilder: FormBuilder ,private router: Router,private Route: ActivatedRoute) {

      
   // this.userForm = this.formBuilder.group({
     // 'name': ['', Validators.required],
      //'lname': ['', Validators.required],
      //'profile': ['', [Validators.required, Validators.minLength(10)]]
   // });
    
    console.log(this.userForm);

  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      /*alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);*/
    }
  }

pass: string ="";
pas: string="";
dis: boolean;
mod: string="";
val: string="!userForm.valid";

  display()
  {
  console.log('password:',this.pass);

  console.log('confirm password:',this.pas);


  if(this.pas==this.pass)
  {
  console.log('Password matched');
  console.log('Registered Successfull....');
  alert('Registered Successfull....');
  this.mod="basicModal";
  this.val="userForm.valid";
 }

  else{
  alert('Password not matching');
  console.log('Password not matched');
  this.val="!userForm.valid";
  this.router.navigate(['./setPassword']);

  }

	}



}
