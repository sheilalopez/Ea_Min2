import { Component, OnInit } from '@angular/core';
import {Subject} from "../../models/subject";
import {SubjectService} from "../../services/subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {

  subjectsList: Subject[];

  constructor(private subjectService: SubjectService) { }

  async ngOnInit() {
    this.subjectsList = await this.subjectService.getSubjects().toPromise();
  }

}
