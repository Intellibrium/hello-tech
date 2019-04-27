import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'needhelp',
  templateUrl: './needhelp.component.html',
  styleUrls: ['./needhelp.component.css']
})
export class needhelpComponent implements OnInit{

  constructor(private router :Router) { }

  ngOnInit() {
  }

  need(){
    this.router.navigate(['./p/helpline']);
  }

}