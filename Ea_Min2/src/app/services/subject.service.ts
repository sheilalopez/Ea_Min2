import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ObjectUnsubscribedError, Observable} from "rxjs";
import {Subject} from "../models/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  urlSubjects: string = 'http://192.168.1.38:3000/subjects';

  constructor(private http: HttpClient) {}

  getSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.urlSubjects);
  }
  getStudentBySubject(subject: string): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.urlSubjects +'/'+ subject);
  }
}
