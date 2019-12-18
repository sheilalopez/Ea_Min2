import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  telematicStudents: Student[];
  systemStudents: Student[];
  aeroStudents: Student[];

  constructor(private studentService: StudentService) { }

  //aquí haremos las peticiones al servicio
  async ngOnInit() {
    this.telematicStudents = await this.studentService.getTelematic().toPromise();
    this.systemStudents = await this.studentService.getSystem().toPromise();
    this.aeroStudents = await this.studentService.getAeros().toPromise();
  }

}
