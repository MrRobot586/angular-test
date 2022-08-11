import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components imports
import { HomeComponent } from './pages/home/home.component';
import { AllCharactersComponent } from './pages/all-characters/all-characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { NewStudentFormComponent } from './pages/students/components/new-student-form/new-student-form.component';
import { CheckApplicationComponent } from './pages/students/components/check-application/check-application.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { DataDetailsComponent } from './shared/components/data-details/data-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'all-characters', redirectTo: 'all-characters/all' },
  { path: 'all-characters', component: AllCharactersComponent, children:
    [
      { path:'all', component: DataTableComponent },
      { path:'house/:house', component: DataTableComponent },
    ]
  },
  { path: 'students', component: StudentsComponent, children: 
    [
      { path: 'new-student', component: NewStudentFormComponent, },
      { path: 'check-application', component: CheckApplicationComponent }
    ]
  },
  { path: 'teachers', component: TeachersComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
