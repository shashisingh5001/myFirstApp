import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './Student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentsComponent } from './students/students.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    StudentsComponent,
    PipeexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }