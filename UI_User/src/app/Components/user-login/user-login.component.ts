import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  

  
  log: string ="";
pas: string="";
home1: string="";
l: string="tech";
p: string ="tech";
login1 : string = "";
pass : string = "";
a: string;
calc:FormGroup;
constructor(private router: Router,private Route: ActivatedRoute,private formBuilder: FormBuilder){
	
}

ngOnInit()
{
	console.log('1: This Is ngOnInit() gets called when component loads');
	console.log('2: And other function will be called after ngOnInit()');
	console.log('3: Now other funtcion going to be called ');
	this.calc=this.formBuilder.group({
		a:'',
		b:''
	})
}
test()
{
this.a=this.pass;
	console.log(this.login1);
	console.log(this.a);
}

login()
{

if((this.log==this.l) && (this.pas==this.p))
{
	alert("Successfully Login......");
    console.log("Login Successfull......");
	console.log(this.log);
	console.log(this.pas);
	this.router.navigate(['/p/h']);
}
else{
	alert("Invalid User Name Or Password....Re-enter Again ");
	//this.router.navigate(['/p/l']);
}

}
	
cal(param){
console.log("osgnjsmojmpdn");
let a =parseInt(param.a);
let b=parseInt(param.b);
if(a==10){
	console.log("sum");
	
	return a+b;
}
if(a==20){
	console.log("sub");
	return a-b;

}
console.log(param.a);
return a;
}
}
