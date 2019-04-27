import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {

  raj:any;
  emerForOthers:boolean;
  
  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
  }

  emerFor(){
    console.log("osgn");
    this.emerForOthers=true;
  }
  emerForSelf(){
    this.router.navigate(['./emer/self']);
  }
  emerForOther(){
    this.router.navigate(['./emer/others']);
  }
  readfyou(){
    this.router.navigate(['./p/emerself']);
  }
  readfoth(){
     this.router.navigate(['./p/emerothers']);
  }
  readfgeneral(){
     this.router.navigate(['../p/emergeneral']);
  }
}
