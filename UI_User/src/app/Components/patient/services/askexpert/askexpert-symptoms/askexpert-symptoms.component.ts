import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-askexpert-symptoms',
  templateUrl: './askexpert-symptoms.component.html',
  styleUrls: ['./askexpert-symptoms.component.css']
})
export class AskexpertSymptomsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submitSymptoms(){
    this.router.navigate(['../aediag']);
  }

}
