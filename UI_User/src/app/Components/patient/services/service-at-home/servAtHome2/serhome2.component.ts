import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
	templateUrl:'serhome2.component.html'
})

export class Serhome2component{
	constructor(private route:Router){}
	next(){
		this.route.navigate(['/p/serhome3']);
	}
}