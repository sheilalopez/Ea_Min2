import { Component, OnInit } from '@angular/core';
import {Subject} from "../../models/subject";
import {SubjectService} from "../../services/subject.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {

  subjectsList: Subject[];

  constructor(private subjectService: SubjectService, private navCtrl: NavController) { }

  async ngOnInit() {
    this.subjectsList = await this.subjectService.getSubjects().toPromise();
  }

  goToPageInfo(subject: string){
    this.navCtrl.navigateForward('/subject-details/'+ subject);
  }

}
