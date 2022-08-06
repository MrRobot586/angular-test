import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AllCharactersComponent } from './pages/components/all-characters/all-characters.component';
import { TeachersComponent } from './pages/components/teachers/teachers.component';
import { StudentsComponent } from './pages/components/students/students.component';
import { HomeComponent } from './pages/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllCharactersComponent,
    TeachersComponent,
    StudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
