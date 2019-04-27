import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-take-opinion',
  templateUrl: './take-opinion.component.html',
  styleUrls: ['./take-opinion.component.css']
})
export class TakeOpinionComponent implements OnInit {

  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
  }
giveMoreDetails(){
  this.router.navigate(['./p/oRecord/sosymp']);
}
}
