import { Component, OnInit } from '@angular/core';
import { course } from '../models/course/course.model';
import { elementAt } from 'rxjs';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css']
})
export class EnrolledCourseComponent implements OnInit{
  constructor(private router:Router,private courseSvc:CourseService){}
  enrolledCourse!: course[]

  ngOnInit(): void {
    this.courseSvc.getCourses().subscribe(courses => {
    this.enrolledCourse = courses.filter((element)=>element.isEnrolled);
  });
  }

  getProgress(course: any): number {
    const completed = course.topics.filter((element:any) => element.isCompleted).length;
    return Math.round((completed / course.topics.length) * 100);
  }
  goBack(){
  this.router.navigate(['']);
}
}
