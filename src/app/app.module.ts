import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// Components imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AllCharactersComponent } from './pages/all-characters/all-characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { NewStudentFormComponent } from './pages/students/components/new-student-form/new-student-form.component';
import { CheckApplicationComponent } from './pages/students/components/check-application/check-application.component';
import { SuccessAlertComponent } from './pages/students/components/success-alert/success-alert.component';
import { HouseSelectorComponent } from './pages/all-characters/components/house-selector/house-selector.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { DataDetailsComponent } from './shared/components/data-details/data-details.component';

import { GeTagePipe } from './shared/pipes/get-age.pipe';

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
    SuccessAlertComponent,
    DataTableComponent,
    HouseSelectorComponent,
    DataDetailsComponent,
    GeTagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
