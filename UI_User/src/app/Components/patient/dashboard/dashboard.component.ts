import { Component, AfterViewInit,OnChanges } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit,OnChanges {
  chatArray:string[]=[];
  m:string;
  osgn:string="#sosPage";
  patient:boolean=true;
  doctor:boolean=false;
  r:string;
  count:number=0;
  constructor(private router:Router) { }

  ngAfterViewInit(){
    $(document).ready(function(){
   $('.sidebarbtn').click(function(){
    $('.sidebar').toggleClass('active');
    $('.sidebarbtn').toggleClass('toggle');
   })
  })
  }
ngOnChanges(){
  this.count=0;
}
sendMessage(param:string){
  console.log(param);
  this.chatArray.push(param);
 // console.log(this.chatArray);
  //this.chatArray.push("hello pankaj");
  this.m="";
  //this.chatArray.push

}
docMessage(param:string){
  console.log(param);
  this.doctor=true;
  this.chatArray.push(param);
 // console.log(this.chatArray);
  //this.chatArray.push("hello pankaj");
  this.m="";
  //this.chatArray.push

}
sosF(){
  this.count++;
  console.log(this.count);
  if(this.count==3){
    this.count=0;
  this.router.navigate(['./p/sos']);
  }
}

// For image 

activeColor: string = 'green';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';
    
    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc= '/assets/userImages.jpg';
    
    handleDragEnter() {
        this.dragging = true;
    }
    
    handleDragLeave() {
        this.dragging = false;
    }
    
    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }
    
    handleImageLoad() {
        this.imageLoaded = true;
        
    }

    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    }
    
    _setActive() {
        
        if (this.imageSrc.length === 0) {
            }
    }
    
    _setInactive() {
        
        if (this.imageSrc.length === 0) {
            
        }
    }

    //User Details

        oldFname: string="Raj";
        oldLname: string="Sharma";
        oldAccountId: string="Fc_012";
        oldPatientId: string="P/10";
        oldEmail: string="raj@gmail.com";
        oldMobile: string="9893892893";
        oldAddress: string="Bangalore";
        oldEmobile: string="8727874828";
        oldAmobile: string="8508383388";
        oldGender: string="Male";
        oldBGroup: string="A+";
        oldDOB: string="01/01/2001";
        oldSubPatientId1:string="P/11";
        oldSubPatientId2:string="P/12";
        oldSubPatientId3:string="P/13"; 

logOut()
{
  alert('Successfully Logout...');
  this.router.navigate(['../l']);
}
homeF(){
    this.router.navigate(['./h']);
}
ram(){
    console.log("jsm -osgn -jsm -ojmpdn");
    this.router.navigate(['./p/h']);
}


}
