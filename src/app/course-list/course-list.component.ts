import { Component, OnInit } from '@angular/core';
import { course } from '../models/course/course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  constructor(private courseSvc:CourseService,
    private router:Router,
    private domSanitizer:DomSanitizer
  ){}

  courses: course[] = [];
  searchText = '';
  levelFilter = '';
  filteredCourses: course[] = [];

  ngOnInit(){
    this.courseSvc.getCourses().subscribe(courses => {
    this.courses = courses.map(course => ({
      ...course,
      sanitizedVideoUrl:this.domSanitizer.bypassSecurityTrustResourceUrl(course.videoUrl)
    }));
    this.applyFilter();
  });
  }

  applyFilter() {
  this.filteredCourses = this.courses.filter(element =>
    (element.courseName.toLowerCase().includes(this.searchText.toLowerCase()) ||
     element.instructorName.toLowerCase().includes(this.searchText.toLowerCase())) &&
    (this.levelFilter ? element.level === this.levelFilter : true)
  );
}

trackByCourseId(item: any) {
  return item.courseId;
}

  onClickViewCourse(courseId:any){
    this.router.navigate(['/view-course', courseId]);
  }

  onClickEnrollCourse(item:any){
    item.isEnrolled = true;
    const index = this.courses.findIndex(
    (course:any) => course.courseId === item.courseId
  );

  if (index !== -1) {
    this.courses[index] = item;
  }
    alert('Congratulations !! You are enrolled for this course.');
    this.courseSvc.setCourses(this.courses);
  }
}
