import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dp',
  templateUrl: './dp.component.html',
  styleUrls: ['./dp.component.css']
})
export class DpComponent implements OnInit {


  name:string;

  isIn = true;   
    toggleState() { 
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

  constructor() { }

  ngOnInit() {
  }

}
