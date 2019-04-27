import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MS{
    constructor(private http:Http){}
    f1(){
return this.http.get('/assets/rama.json').map((response:Response)=>
    {
      
     return  response.json();
      //console.log(response.json());
    //catch(this.errorF);
    })
  }

  private errorF(error:Response|any){

    console.log(error);
    return Observable.throw(error||"osgn-jsmError");
  }
}
