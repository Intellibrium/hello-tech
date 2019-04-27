import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {
lab:string;
labdata:string;
  constructor() { }

  ngOnInit() {
    sessionStorage.getItem('labReport');
    sessionStorage.getItem('medhistory');
    sessionStorage.getItem('treeatment');
    this.labdata= JSON.parse(sessionStorage.getItem("labReport"));
    if(this.labdata==null){
      this.lab="no lab records";
    }
    else{
      this.lab=this.labdata;
    }
    
  }

}
