import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-service-at-home',
  templateUrl: './service-at-home.component.html',
  styleUrls: ['./service-at-home.component.css']
})
export class ServiceAtHomeComponent implements OnInit {

  
ischecked=true;
	// service=1;
	constructor(private route:Router){}
	next(){
		this.route.navigate(['/p/serhome2']);
	}
  ngOnInit() {
  }

}
