import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  urlStudent: string = 'http://192.168.1.38:3000/students';

  constructor(private http: HttpClient) { }
  //Rutas Url de backend.
  getTelematic(): Observable<Student[]>{
    return this.http.get<Student[]>(this.urlStudent + '/telematics');
  }
  getSystem(): Observable<Student[]>{
    return this.http.get<Student[]>(this.urlStudent + '/systems');
  }
  getAeros(): Observable<Student[]>{
    return this.http.get<Student[]>(this.urlStudent + '/aeros');
  }
  getStudentsbyName(name: string): Observable<Student>{
    return this.http.get<Student>(this.urlStudent+'/'+ name);
  }
}
