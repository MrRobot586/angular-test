import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components imports
import { HomeComponent } from './pages/home/home.component';
import { AllCharactersComponent } from './pages/all-characters/all-characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { NewStudentFormComponent } from './pages/students/components/new-student-form/new-student-form.component';
import { CheckApplicationComponent } from './pages/students/components/check-application/check-application.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'allcharacters', component: AllCharactersComponent },
  { path: 'students', component: StudentsComponent, children: 
    [
      { path: 'check-application', component: CheckApplicationComponent },
      { path: 'new-student', component: NewStudentFormComponent }
    ]
  },
  { path: 'teachers', component: TeachersComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
