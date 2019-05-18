import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './validation.service';
import { UserRestrationService } from './user-restration.service';
import { UserRegistration } from './user-registration.model';
import { PatientRegistration } from './patient-registration.model';



@Component({
  selector: 'app-patient-registeration',
  templateUrl: './patient-registeration.component.html',
  styleUrls: ['./patient-registeration.component.css'],
  providers: [ValidationService]
})
export class PatientRegisterationComponent implements OnInit {
  myForm: FormGroup;

  userRegistration: UserRegistration;
  patientRegistration: PatientRegistration;
  userForm: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private Route: ActivatedRoute
    , private userRestrationService: UserRestrationService) {
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-z]*$/)])],
      'lname': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-z]*$/)])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
      'gender': ['', [Validators.required]],
      'DOB': ['', [Validators.required]],
      'mobile': ['', [Validators.required]],
      'primaryCity': ['', [Validators.required]],
      'pinCode': ['', [Validators.required]],
      'blood': ['', [Validators.required]],



      //'profile': ['', [Validators.required, Validators.minLength(10)]]
    });

    console.log(this.userForm);
  }


  ngOnInit() {


  }




  saveUser() {
    this.userRegistration = {
      firstName: this.userForm.value.name,
      lastName: this.userForm.value.lname,
      gender: this.userForm.value.gender,
      DOB: this.userForm.value.DOB,
      emailId: this.userForm.value.email,
      contact: this.userForm.value.mobile,
      blood: this.userForm.value.blood,
    };
    console.log(this.userRegistration);

    this.userRestrationService.registerUser(this.userRegistration, 'account').subscribe(data => {
      console.log(data);
      this.patientRegistration = {
        accountId: data['accountId'],
        relation: 'self',
        firstName: this.userForm.value.name,
        lastName: this.userForm.value.lname,
        gender: this.userForm.value.gender,
        DOB: this.userForm.value.DOB,
        contact: this.userForm.value.mobile,
        bloodGroup: this.userForm.value.blood
      };
      this.userRestrationService.registerUser(this.patientRegistration, 'patient').subscribe(result => {
        console.log(result);
        this.router.navigate(['/setPassword']);
      });
    });

    /*this.userForm= new FormGroup({
          name:new FormControl(),
          lname:new FormControl(),
          gender:new FormControl(),
          DOB:new FormControl(),
          email:new FormControl(),
          mobile:new FormControl(),
          blood:new FormControl() 
    });*/

    if (this.userForm.dirty && this.userForm.valid) {
      /*alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);*/
    }
  }

  today = new Date().toJSON().split('T')[0];

  otp: string = "";
  newotp: string = "12345";
  nmod: string;
  mod: string = "modal";


  close(id: string) {
    console.log('OTP You have entered:', this.otp);
    console.log('OTP Required:', this.newotp);

    if (this.newotp == this.otp) {
      console.log('Currect OTP..');
      this.nmod = this.mod;
      this.saveUser();

    }

    else {
      console.log('Wrong OTP..');
      alert('Wrong OTP.. Try again');
      this.router.navigate(['../reg']);

    }
  }

  col: string;
  sent: string;
  reenter: string;
  send() {
    this.col = "#ff8a82";
    this.sent = "OTP Sent";
    this.reenter = "Please enter the OTP";
    //   'name'
    // 'lname'
    // 'email': 
    // 'gender':
    // 'DOB' : 
    // 'mobile' : 
    // 'primaryCity':
    // 'pinCode':
    // 'blood Group' :

  }
}

