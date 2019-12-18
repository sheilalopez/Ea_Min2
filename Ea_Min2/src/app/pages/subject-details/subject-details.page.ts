import { Component, OnInit } from '@angular/core';
import {Subject} from "../../models/subject";
import {SubjectService} from "../../services/subject.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.page.html',
  styleUrls: ['./subject-details.page.scss'],
})
export class SubjectDetailsPage implements OnInit {

  subjectName: string;
  subject: Subject = new Subject();

  constructor(private subjectService: SubjectService, private route: ActivatedRoute) {
    this.subjectName = this.route.snapshot.paramMap.get('subject'); //subject --> app route modules
  }

  async ngOnInit() {
    let tmp = await this.subjectService.getStudentBySubject(this.subjectName).toPromise();
    this.subject = tmp[0];
  }

}
