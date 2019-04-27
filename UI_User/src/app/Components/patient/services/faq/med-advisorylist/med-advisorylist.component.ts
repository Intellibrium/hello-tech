import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-med-advisorylist',
  templateUrl: './med-advisorylist.component.html',
  styleUrls: ['./med-advisorylist.component.css']
})
export class MedAdvisorylistComponent implements OnInit {

  constructor(private router : Router) { }

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
