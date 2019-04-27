import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  raj:any;
  otherPat:any;
  chatForOther:boolean=false;
  constructor(private router:Router , private routes:ActivatedRoute) { }

  ngOnInit() {
  }
  
  giveDetails(){
    this.router.navigate(['../p/cy']);
  }
chatYu(){
  this.router.navigate(['../p/cy']);
}
cforOther(pat){
  this.chatForOther=true;
  
}
chatOthers(){
  this.router.navigate(['../p/cy']);
}
}
