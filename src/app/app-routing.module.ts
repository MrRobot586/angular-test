import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components imports
import { HomeComponent } from './pages/components/home/home.component';
import { AllCharactersComponent } from './pages/components/all-characters/all-characters.component';
import { StudentsComponent } from './pages/components/students/students.component';
import { TeachersComponent } from './pages/components/teachers/teachers.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'allcharacters', component: AllCharactersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
