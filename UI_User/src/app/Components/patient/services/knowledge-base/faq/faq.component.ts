import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private router :Router,private routes:ActivatedRoute) { }
   heading :string;
   head:string;
  ngOnInit() {
   this.heading=this.routes.snapshot.params.param;
   
   this.heading;
  //console.log( this.heading.replace("null","  "));
  //console.log( this.heading);
   
  }

  readFaq(){
    this.router.navigate(['./p/faqList']);
  }
  readDos(){
     this.router.navigate(['./p/dosList']);
  }
  readMedAdv(){
     this.router.navigate(['../p/faq/medAdvList']);
  }
   postQueries() {
     this.router.navigate(['../p/faq/pquery']);
    }
}
