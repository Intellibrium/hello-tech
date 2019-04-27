import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  name:string;
  constructor() { }

  ngOnInit() {
  }
  

  isIn = true;   
    toggleState() { 
       let bool = this.isIn;
        this.isIn = bool === true ? true : true; 
    }

}
