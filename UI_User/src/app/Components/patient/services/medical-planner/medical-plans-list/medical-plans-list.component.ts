import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-plans-list',
  templateUrl: './medical-plans-list.component.html',
  styleUrls: ['./medical-plans-list.component.css']
})
export class MedicalPlansListComponent implements OnInit {

  planList=[
    {'name':'vaccination','type':'daily'},
    {'name':'checkup','type':'monthly'},
    {'name':'checkup','type':'custom'}
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
