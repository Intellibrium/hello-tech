import {Injectable} from '@angular/core';
import {Symptoms} from '../symptoms.component';
import {FormGroup} from '@angular/forms';
@Injectable()

export class SymptomServ{

    private symptom:Symptoms;
    private psymptoms:Symptoms[]=[];

    checkAndMate(syso:FormGroup[]):boolean{
        console.log("osgn jsm serv");

        syso.forEach((raj)=>{
                this.symptom={
                    "symptom":raj.get('symptom').value,
                    "from":raj.get('from').value,
                    "till":raj.get('till').value,
                    "details":raj.get('details').value
                }
                this.psymptoms.push(this.symptom);
        });
            //console.log(JSON.stringify(this.psymptoms));
            sessionStorage.setItem("csymp",JSON.stringify(this.psymptoms));

        return true;
    }
}