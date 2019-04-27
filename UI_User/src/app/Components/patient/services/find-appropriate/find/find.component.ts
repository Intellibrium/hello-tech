import { Component } from '@angular/core';
import { FindService } from './find.service';
import { Area } from './area';
import { Place } from './place';
import { Doctor } from './docs';

@Component({
	templateUrl:'find.component.html',
	providers:[FindService]
})

export class FindComponent{
	searchResult:string;
	selectedplace:Place=new Place(0,'Bengaluru','assets/images/bng.jpg');
	selectedarea:Area=new Area(1,1,'Banashankari');
	places:Place[];
	areas:Area[];
	doctors:Doctor[];
	constructor(private fs:FindService){
		this.places=this.fs.getplace();
	}
	onselect(pid){
		this.areas=this.fs.getarea().filter((item)=>item.pid==pid);
		this.doctors=this.fs.getdoc().filter((item)=>item.pid==pid);
	}
	// onSelect(pid){
	// 	this.doctors=this.fs.getdoc().filter((item)=>item.aid==aid);
	// }

}