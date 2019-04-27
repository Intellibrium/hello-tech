import { Component, OnInit } from '@angular/core';
import {RouterModule,Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'bloodreg',
  templateUrl: './bloodreg.component.html',
  styleUrls: ['./bloodreg.component.css']
})
export class bloodregComponent implements OnInit{

myForm:FormGroup;

  email:string;
	
	constructor(private router: Router,private route:ActivatedRoute, private formb:FormBuilder)


   {}//
   ngOnInit(){

   this.myForm=this.formb.group({
   name:['',Validators.required],
   email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
   phno:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern('^[7-9][0-9]{9}$')]],
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

