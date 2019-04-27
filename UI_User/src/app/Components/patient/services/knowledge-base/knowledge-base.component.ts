import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {FormGroup,FormBuilder,FormControl} from '@angular/forms';
@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.css']
})
export class KnowledgeBaseComponent implements OnInit {

  knowledgeBaseForm:FormGroup;
  model:kb;
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.knowledgeBaseForm=this.formBuilder.group({
      disease:[],
      symptoms:[],
      treatment:[],
      accident:[]
    })
  }
  readFaq(){
    this.router.navigate(['./p/faqList']);
  }
  readDos(){
     this.router.navigate(['./p/dosList']);
  }
  readMedAdv(){
     this.router.navigate(['../p/faq/medAdvList']);
  }
   postQueries() {
     this.router.navigate(['../p/faq/pquery']);
    }
	
	faq()
	{
  console.log(this.knowledgeBaseForm.value);
  let param =JSON.stringify(this.knowledgeBaseForm.value);
this.router.navigate(['./p/faq',param]);
  
  //this.router.navigate(['./p/faq']);

  
	}

}

interface kb{
  disease:string;
      symptoms:string;
      treatment:string;
      accident:string;
}
