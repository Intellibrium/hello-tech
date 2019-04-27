import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-query',
  templateUrl: './faq-query.component.html',
  styleUrls: ['./faq-query.component.css']
})
export class FaqQueryComponent implements OnInit {
subject:string;
ram:string="ram";
  constructor() { }

  ngOnInit() {
  }

}
