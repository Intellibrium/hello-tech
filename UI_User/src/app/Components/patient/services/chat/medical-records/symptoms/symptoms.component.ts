import { Component, OnInit,OnChanges } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {SymptomServ} from './symptom-serv/symptomServ.service';

@Component({//
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css'],
  providers:[SymptomServ]
})
export class SymptomsComponent implements OnInit,OnChanges {

  symptomsForm:FormGroup;
  symptomsForm1:FormGroup;
  symptomsFormGroup:FormGroup[]=[];
  formsDetailCount:number=0;
  x:FormGroup;
  raj:FormGroup;
  pSymptom:Symptoms;
  pSymptom1:Symptoms;
  pSymptoms:Symptoms[]=[];
  constructor(private formBuilder:FormBuilder,private router:Router,private routes:ActivatedRoute,private localSyso:SymptomServ) { }

  ngOnInit() {
    this.createSymptoms();
    this.createSymptoms1();
     
  }
  ngOnChanges(){
    console.log("jsm");
    console.log(this.symptomsFormGroup.values);
  }

  createSymptoms(){
    this.symptomsForm=this.formBuilder.group({
      symptom:[],
      from:[],
      till:[],
      details:[]

    })
    this.symptomsFormGroup.push(this.symptomsForm);
    
  }
  addSymptoms(){
    
    this.createSymptoms();
  }
  createSymptoms1(){
    this.symptomsForm1=this.formBuilder.group({
       symptom:[],
       from:[],
    till:[],
       details:[]

    })
      this.symptomsFormGroup.push(this.symptomsForm1);
}
    saveSymp(param){
      //console.log(this.symptomsFormGroup[0]);
     console.log(this.symptomsFormGroup);
    if( this.localSyso.checkAndMate(this.symptomsFormGroup)){
    this.router.navigate(['./p/cmed']);
    };
      // for(var raj in this.symptomsFormGroup){
      //   console.log(raj.big);
      // }
      // this.symptomsFormGroup.forEach((raj)=>{
      //   console.log(raj.get('symptom').value);
      //   console.log(raj.get('from').value);
      //   console.log(raj.get('till').value);
      //   console.log(raj.get('details').value);
      //  this. pSymptom.symptom=raj.get('symptom').value;
      //  this.pSymptom.from=raj.get('from').value;
      //  this.pSymptom.till=raj.get('till').value;
      //  this.pSymptom.details=raj.get('details').value;
      //  this.pSymptom1={
      //    "symptom":raj.get('symptom').value,
      //    "from":raj.get('from').value,
      //    "till":raj.get('till').value,
      //    "details":raj.get('details').value

      //  }
        // this.pSymptoms.push(this.pSymptom1);
        // console.log("osgn");
        // //console.log(this.pSymptom);
        // console.log("jsm");
        // console.log(this.pSymptoms);

        
        //this.raj.forEach((element) => {
          
        //});
      // })
      //  console.log(this.pSymptoms);
      //  let rama=this.pSymptoms.toString;
    
       //sessionStorage.setItem("cs",this.pSymptoms);
      // for(var i;i<this.symptomsFormGroup.length;i++){
      //   console.log(i);
      //   console.log("rama");
      // }

     //localStorage.setItem('symp',"raj");
    // this.router.navigate(['./p/cmed']);
      if(this.formsDetailCount==0){}
//console.log(param);
    }
chatDirectly(){
 this.router.navigate(['../p/chatd']);
  }
rajesh(){
  
}
}
export interface Symptoms{
  symptom:string,
      from:string,
      till:string,
      details:string;
}
