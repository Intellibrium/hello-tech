import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
	
selector:'femerg',
templateUrl:'./femerg.html',
styleUrls: ['./femerg.css']

})

export class femergComponent implements OnInit{


constructor(private router :Router) { }

  ngOnInit() {
  }

  readfyou(){
    this.router.navigate(['./p/fyourself']);
  }
  readfoth(){
     this.router.navigate(['./p/fother']);
  }
  readfgeneral(){
     this.router.navigate(['../p/fgeneral']);
  }
   


	

}