import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {
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
