import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit {

  studentName: string;
  student: Student = new Student();

  constructor(private studentService: StudentService, private route: ActivatedRoute) {

    this.studentName = this.route.snapshot.paramMap.get('name')
  }

  async ngOnInit() {

    let tmp = await this.studentService.getStudentsbyName(this.studentName).toPromise();
    this.student = tmp[0];
  }

}
