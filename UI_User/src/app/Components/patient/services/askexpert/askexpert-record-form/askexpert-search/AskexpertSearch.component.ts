import {Component} from '@angular/core';
import{Router,Routes} from '@angular/router';
@Component({
    selector:'askExpSearch',
    templateUrl:'./AskexpertSearchComponent.html'
})
export class AskexpertSearchComponent{
constructor(private router:Router) { }
    searchQuery:boolean;
    expPanel(){
        this.searchQuery=true;
    }
    proceed(){

        this.router.navigate(['./p/aesymp']);
    }
}
