import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl:'./chatOption.html'
})
export class ChatOptionComponent implements OnInit{
    doctorConsult:string;
    doctorFrom:string;
    constructor(private router:Router){

    }
    ngOnInit(){
        console.log("ram");
    }
    giveDetails(){
    this.router.navigate(['../p/csymp']);
  }
chatDirectly(){
 this.router.navigate(['../p/chatd']);
  }
}
//D:\tech\firstcare-web\src\app\user\patient\services\chat\chatOption.component.ts