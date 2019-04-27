import { Component, OnInit } from '@angular/core';
import {RouterModule,Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl, Validators ,FormBuilder} from '@angular/forms';


@Component({
  selector: 'fundreg',
  templateUrl: './fundreg.component.html',
  styleUrls: ['./fundreg.component.css']
})
export class fundregComponent{
myForm:FormGroup;
	
	constructor(private router: Router,private route:ActivatedRoute, private formb:FormBuilder)


   {}
   ngOnInit(){

   this.myForm=this.formb.group({
   name:['',Validators.required],
   email:['',Validators.required],
   bg:['',Validators.required],
   gd:['',Validators.required],
   phno:['',Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern[0-9]])],
   sub:new FormControl(),
   msg:new FormControl(),
   class:new FormControl(),
  
   })
}

reg()
   {
   console.log(this.myForm.value.name);
   console.log(this.myForm.value.email);
   console.log(this.myForm.value.phno);
   console.log(this.myForm.value.class);
   console.log(this.myForm.value.msg);
   alert("successfully message has been sent");
}
}