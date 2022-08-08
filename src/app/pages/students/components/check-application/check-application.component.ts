import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-application',
  templateUrl: './check-application.component.html',
  styleUrls: ['./check-application.component.css']
})
export class CheckApplicationComponent implements OnInit {

  public NewStudentApplyForm!:FormGroup;
  public NewStudentApplyData!:any;

  constructor(private readonly fb: FormBuilder) { 
    this.NewStudentApplyData = this.GetInfoFromLocalStorage();
  }

  ngOnInit(): void {
    this.NewStudentApplyForm = this.FillFormFields();
  }
  

  // Get form info from the localstorage
  GetInfoFromLocalStorage(): string | null {
    if(this.NewStudentApplyData = localStorage.getItem('NewStudentApplication')){
      return JSON.parse(this.NewStudentApplyData);
    }else{
      return null;
    }
  }

  // Fill the form fields to Display the information
  FillFormFields():FormGroup {
    return this.fb.group(
      {
        firstName: [ {value: this.NewStudentApplyData ?  this.NewStudentApplyData : '' , disabled: true }],
        lastName: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.lastName : '', disabled: true }],
        age: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.age : '', disabled: true }],
        gender: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.gender : '', disabled: true }],
        species: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.species : '', disabled: true }],
        Dateofbirth: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.Dateofbirth : '', disabled: true }],
        email: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.email : '', disabled: true }],
        pnumber: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.pnumber : '', disabled: true }],
        country: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.country : '', disabled: true }],
        state: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.state : '', disabled: true }],
        zip: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.zip : '', disabled: true }],
        address: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.address : '', disabled: true }],
        registrationid: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.registrationid : '', disabled: true }],
        status: [{value: this.NewStudentApplyData ?  this.NewStudentApplyData.status : '', disabled: true }]
      }
    ); 
  }
  
}
