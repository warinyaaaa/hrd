import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


export type Student = {
  id: number
  name?: string
}

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.student = {id: undefined, name: 'wa'}
  }

  save() {
    console.log(this.student)
    this.http.post('http://localhost:8080/student', this.student).subscribe(e => {
      console.log(e)
      }
    )
  }
}
