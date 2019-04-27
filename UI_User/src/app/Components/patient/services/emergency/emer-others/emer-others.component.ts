import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emer-others',
  templateUrl: './emer-others.component.html',
  styleUrls: ['./emer-others.component.css']
})
export class EmerOthersComponent implements OnInit {
emerForOthers:boolean;
  constructor() { }

  ngOnInit() {
  }


  emerFor(){
    console.log("osgn");
    this.emerForOthers=true;
  }

}
