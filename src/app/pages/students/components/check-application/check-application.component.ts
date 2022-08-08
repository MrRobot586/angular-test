import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-application',
  templateUrl: './check-application.component.html',
  styleUrls: ['./check-application.component.css']
})
export class CheckApplicationComponent implements OnInit {

  public NewStudentApplyData!:any;
  public NewStudentApplyForm!:FormGroup;

  constructor(private readonly fb: FormBuilder) { 
    this.NewStudentApplyData = this.GetInfoFromLocalStorage();
  }

  ngOnInit(): void {
    this.NewStudentApplyForm = this.FillFormFields(this.NewStudentApplyData);
  }
  

  // Get form info from the localstorage
  GetInfoFromLocalStorage(): string | null {
    if(this.NewStudentApplyData = localStorage.getItem('NewStudentApplication')){
      return JSON.parse(this.NewStudentApplyData);
    }else{
      return null;
    }
  }

  FillFormFields(data:any):FormGroup {
    return this.fb.group({
      firstName: [ {value: this.NewStudentApplyData.firstName, disabled: true }],
      lastName: [{value: this.NewStudentApplyData.lastName, disabled: true }],
      age: [{value: this.NewStudentApplyData.age, disabled: true }],
      gender: [{value: this.NewStudentApplyData.gender, disabled: true }],
      species: [{value: this.NewStudentApplyData.species, disabled: true }],
      Dateofbirth: [{value: this.NewStudentApplyData.Dateofbirth, disabled: true }],
      email: [{value: this.NewStudentApplyData.email, disabled: true }],
      pnumber: [{value: this.NewStudentApplyData.pnumber, disabled: true }],
      country: [{value: this.NewStudentApplyData.country, disabled: true }],
      state: [{value: this.NewStudentApplyData.state, disabled: true }],
      zip: [{value: this.NewStudentApplyData.zip, disabled: true }],
      address: [{value: this.NewStudentApplyData.address, disabled: true }],
      registrationid: [{value: this.NewStudentApplyData.registrationid, disabled: true }],
      status: [{value: this.NewStudentApplyData.status, disabled: true }]
    });
  }
  
}
