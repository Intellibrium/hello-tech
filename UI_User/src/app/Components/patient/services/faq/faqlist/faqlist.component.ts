import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-faqlist',
  templateUrl: './faqlist.component.html',
  styleUrls: ['./faqlist.component.css']
})
export class FaqlistComponent implements OnInit {

  constructor(private router :Router) { }

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
