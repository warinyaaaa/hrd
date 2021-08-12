import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ],exports:[AddStudentComponent]
})
export class StudentModule { }

