import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
log:string="";
pas:string="";
l:string="FC01";
p:string="firstcareadmin";
  
  constructor(private router: Router,private Route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  login()
{

if((this.log==this.l) && (this.pas==this.p))
{
	alert("Successfully Login......");
    console.log("Login Successfull......");
	console.log(this.log);
	console.log(this.pas);
	this.router.navigate(['/fc']);
}
else{
	alert("Invalid User Name Or Password....Re-enter Again ");
	//this.router.navigate(['/admin']);
}

}

}
