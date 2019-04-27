import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-do-dontslist',
  templateUrl: './do-dontslist.component.html',
  styleUrls: ['./do-dontslist.component.css']
})
export class DoDontslistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  readFaq(){
    this.router.navigate(['../p/faqList']);
  }
  readDos(){
     this.router.navigate(['./p/dosList']);
  }
  readMedAdv(){
     this.router.navigate(['../p/medAdvList']);
  }
   postQueries() {
     this.router.navigate(['../p/pquery']);
    }

}
