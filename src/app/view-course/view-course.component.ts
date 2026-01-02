import { Component, OnInit } from '@angular/core';
import { course } from '../models/course/course.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute,
    private courseSvc:CourseService,
    private router:Router
  ){}
  course!: course | any;
  progress = 0;
  coursesData!:course | any;

  ngOnInit(){
    const courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.course = this.courseSvc.getCourseById(courseId) || [];
    this.courseSvc.getCourses().subscribe(courses => {
      this.coursesData = courses;
  });
    this.updatePreciousProgress()
  }

  updateProgress() {
    const completed = this.course.topics.filter((item:any) => item.isCompleted).length;
    this.progress = Math.round(
      (completed / this.course.topics.length) * 100
    );
  }

  updatePreciousProgress(){
    const courseDtaa = this.coursesData.filter((element:any)=>element.courseId === this.course.courseId)
    const completed = courseDtaa[0].topics.filter((item:any) => item.isCompleted).length;
    this.progress = Math.round(
      (completed / this.course.topics.length) * 100
    );
  }

  toggleCompletion(topic: any) {
  topic.isCompleted = !topic.isCompleted;
  this.updateProgress();
  const index = this.coursesData.findIndex(
    (course:any) => course.courseId === this.course.courseId
  );

  if (index !== -1) {
    this.coursesData[index] = this.course;
  }
  this.courseSvc.setCourses(this.coursesData);
}

goBack(){
  this.router.navigate(['']);
}
}
