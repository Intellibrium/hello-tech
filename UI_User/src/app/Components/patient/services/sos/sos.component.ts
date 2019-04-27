import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent implements OnInit {
emerFor:string;
emergencyFor:string;
emergency:boolean=false;
formTo:boolean=true;
saved:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  saveEmer(emer){
    console.log(emer.target.value);
    this.emergencyFor=emer.target.value;
    if( this.emergencyFor==this.emerFor){
      console.log("done");
      this.emergency=true;
      //this.savingServ(this.emergencyFor,this.savingServ);

    }


  }
  saveDetailForEmer(){
    this.savingServ(this.emergencyFor,this.savingServ);
    //this.router.navigate(['./p/h']);

  }
  savingServ(sub,cb){
    //saveDetails(ram,callback){
      this.formTo=false;
    this.saved=true;
    console.log("sita");
    setTimeout(()=>{
        this.router.navigate(['./p/h']);
        cb();
    },3000)
  }
  savedTheDetails(){
    this.formTo=false;
    this.saved=true;
   // console.log("sita");
  }
  
}
