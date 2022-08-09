import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// Components imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AllCharactersComponent } from './pages/all-characters/all-characters.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { StudentsComponent } from './pages/students/students.component';
import { HomeComponent } from './pages/home/home.component';
import { NewStudentFormComponent } from './pages/students/components/new-student-form/new-student-form.component';
import { CheckApplicationComponent } from './pages/students/components/check-application/check-application.component';
import { SuccessAlertComponent } from './pages/students/components/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllCharactersComponent,
    TeachersComponent,
    StudentsComponent,
    HomeComponent,
    NewStudentFormComponent,
    CheckApplicationComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
