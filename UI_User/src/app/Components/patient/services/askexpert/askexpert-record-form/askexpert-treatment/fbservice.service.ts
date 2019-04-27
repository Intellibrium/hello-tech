
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class MyFBService{

    constructor(private http:Http){}
    giveUserDetails()
    {
        

       return this.http.get('/assets/fb.json').map((response:Response)=>{
           console.log("iam in service"+response.json())
           return response.json();
        });
            
        
    }
}