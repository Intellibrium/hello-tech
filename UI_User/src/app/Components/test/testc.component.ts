import {Component,Input,OnInit,OnChanges,EventEmitter,Output} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
    selector:'testc',
    templateUrl:'./testc.html',
    styleUrls: ['./t.css']
})
export class TestCComponent implements OnInit,OnChanges{
    name:string="osgn jsm";
    response:string;
    childMsg:FormGroup;
    marr:string[]=[];
    @Input() msgFromP:string;
    @Output() msgFromC:EventEmitter<string>=new EventEmitter();
    @Input() mfp:string;
    @Input() mc:string[];
    @Output() mcp:EventEmitter<string[]>=new EventEmitter();
    @Output() r2:EventEmitter<string>=new EventEmitter();
sendingDoctor:string[]=[];
count:number=0;
constructor(private fb:FormBuilder){
    this.childMsg=this.fb.group({
        m0:[]
    })
}
//
ngOnInit(){
   // sessionStorage.setItem('mp',toString);
    console.log(this.msgFromP);
    console.log(sessionStorage.getItem('m1'));
}
ngOnChanges(){
     console.log("on change");
// console.log(this.msgFromP);
this.msgFromC.emit(this.response);
this.mcp.emit();
console.log(this.mc);

}
reply($event){
    console.log("replying");
this.msgFromC.emit(this.response);
}
replyP(){
// console.log(this.childMsg.value.m0);
// this.marr.push(this.childMsg.value.m0);
// this.mcp.emit(this.marr);
console.log("reply p");
 this.r2.emit(this.childMsg.value.m0);
 console.log("reply p");
 this.count++;
}
}