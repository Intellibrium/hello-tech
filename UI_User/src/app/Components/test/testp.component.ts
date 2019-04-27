import {Component,OnInit} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
    selector:'testp',
    templateUrl:'./testp.html',
    styleUrls: ['./t.css']
})
export class TestPComponent implements OnInit{
    name:string="osgn jsm";
    msg:string;
    res:String;
    msgForm:FormGroup;
    newm:string;
    mp:string[]=[];
    mcm:string[]=[];
    r:Object[]=[];
     r1:string[]=[];
      r3:string;
      patientMessages:string[]=[];
      sendingPatient:string[]=[];
      count:number=0;
constructor(private fb:FormBuilder){}
ngOnInit(){
this.msgForm=this.fb.group({
    m:[],
})
}//
// receiveFromChild($event){
//     console.log($event);
//     console.log("parent is receiving");
//     this.res=$event;

// }
sm(){
console.log(this.msgForm.value.m);
this.newm=this.msgForm.value.m;
sessionStorage.setItem('m1',this.newm);
this.mp.push(this.newm);
// console.log(this.mp)
this.sendingPatient.push(this.newm);
console.log(this.sendingPatient);
this.count++;
}
rfc($event){
    console.log($event);
    console.log("parent is receiving");
    //this.r=$event;
    //this.r.push($event);
    console.log(this.r);
   this. patientMessages.push($event);

}
}