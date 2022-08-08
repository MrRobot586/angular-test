import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {
  
  public ShowAlert:Boolean = false; 
  public NewStudentForm!:FormGroup;
  private FormData!:Object;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void { this.NewStudentForm = this.SetUpForm() }

  onSubmit():void{ }

  SetUpForm():FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required, Validators.max(100), Validators.min(15)]],
      gender: ['', [Validators.required]],
      species: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      Dateofbirth: ['', [Validators.required]],
      email: ['', [Validators.email]],
      pnumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required, Validators.minLength(5)]],
      zip: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  ValidateFormInput(inputname:string, condition:string, getwarn:boolean = false): Boolean | String {
    
    let message = '';

    if(getwarn){
      
      switch (condition) {
        case 'required':
          message = 'This field is required.';
          break;

        case 'email':
          message = 'The email address is invalid, please verify it.';
          break;

        case 'minlength':
          message = `The value its too short.`;
          break;

        case 'maxlength':
          message = 'The value its too long.';
          break;

        default:
          message = 'Invalid value.';
          break;
      }

      return message;
    
    }else{
      return (this.NewStudentForm.get(inputname)?.touched && this.NewStudentForm.get(inputname)?.errors?.[condition]);
    }

  }

  SaveFormToLocalStorage():void {
    
    // Get and setup form data
    this.FormData = {
      'firstName': this.NewStudentForm.get('firstName')?.value,
      'lastName': this.NewStudentForm.get('gender')?.value,
      'age': this.NewStudentForm.get('age')?.value,
      'gender': this.NewStudentForm.get('gender')?.value,
      'species': this.NewStudentForm.get('species')?.value,
      'Dateofbirth': this.NewStudentForm.get('Dateofbirth')?.value,
      'email': this.NewStudentForm.get('email')?.value,
      'pnumber': this.NewStudentForm.get('pnumber')?.value,
      'country': this.NewStudentForm.get('country')?.value,
      'state': this.NewStudentForm.get('state')?.value,
      'zip': this.NewStudentForm.get('zip')?.value,
      'address': this.NewStudentForm.get('address')?.value,
      'registrationid': (Math.random()*586586586).toFixed(),
      'status': 'Pending...'
    };

    localStorage.setItem('NewStudentApplication', JSON.stringify(this.FormData));
    
    setTimeout(() => {
      this.ShowAlert = true;
    }, 1000);
    
    setTimeout(() => {
      this.ShowAlert = false;
    }, 4000);
  }
  
}