import { MehdiserviceService } from './../services/mehdiservice.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "List of courses";

  @Input('isFav') isStarActive: boolean = false;

  @Output('change') changeIT = new EventEmitter();

  doToggleStar(){
    this.isStarActive = !this.isStarActive;
    this.changeIT.emit('somedatachanged: ' + this.isStarActive);
  }

  longText: string = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';

  isActive: boolean = true;

  x: number;
  y: number;

  courses: string[];

  toggle($event) {
    console.log($event);
    this.isActive = !this.isActive;
    
  }

  imageUrl: string = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';

  constructor(mehdiSrv: MehdiserviceService) {

    this.courses = mehdiSrv.getCourses();
  }

  calcPosition($event) {
    this.x = $event.x;
    this.y = $event.y;
  }

  handleEnter() {

  }

  ngOnInit(): void {
  }

}
