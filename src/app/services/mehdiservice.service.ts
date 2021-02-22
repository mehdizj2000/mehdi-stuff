import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MehdiserviceService {

  courses = ["course1","course1","course1"];

  getCourses(){
    return this.courses;
  }

  constructor() { }
}
