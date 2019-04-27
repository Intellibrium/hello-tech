import { Injectable } from '@angular/core'
import { Place } from './place';
import { Area } from './area';
import { Doctor } from './docs'

@Injectable()
export class FindService{
	getplace(){
		return [
			new Place(1,'Bengaluru','assets/images/bng.jpg'),
			new Place(2,'Hyderabad','assets/images/hyd.jpg'),
			new Place(3,'Kochi','assets/images/kochi.jpg'),
			new Place(4,'Pune','assets/images/pune.jpg')
		];
	}

	getarea(){
		return [
			new Area(1,1,'Banashankari'),
			new Area(2,1,'Jpnagar'),
			new Area(3,2,'BanjaraHills'),
			new Area(4,2,'Manikonda'),
			new Area(5,3,'Angamali'),
			new Area(6,3,'Aluva'),
			new Area(7,4,'Akurdi'),
			new Area(8,4,'Balewadi')
		];
	}

	getdoc(){
		return[
			new Doctor(1,1,1,'pankaj','Eye','3years'),
			new Doctor(2,1,2,'Arya','Skin','3years'),
			new Doctor(3,2,3,'Abdul','Children','3years'),
			new Doctor(4,2,4,'Antony','Eye','3years'),
			new Doctor(5,3,5,'Arjun','Skin','3years'),
			new Doctor(6,3,6,'John','Children','3years'),
			new Doctor(7,4,7,'Aslam','Eye','3years'),
			new Doctor(8,4,8,'Rajesh','Eye','3years')
		];
	}
}