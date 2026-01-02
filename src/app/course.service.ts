import { Injectable } from '@angular/core';
import { course } from './models/course/course.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private courses$ = new BehaviorSubject<course[]>([
    {
      courseId: 1,
      courseName: 'Angular Basics',
      instructorName: 'John Doe',
      level: 'Beginner',
      category: 'Web Development',
      description: 'Learn Angular fundamentals',
      isEnrolled:false,
      videoUrl: 'https://www.youtube.com/embed/3dHNOWTI7H8',
      topics: [
        { topicId: 1, topicName: 'Introduction', topicVideoUrl: 'https://www.youtube.com/embed/3dHNOWTI7H8' },
        { topicId: 2, topicName: 'Components', topicVideoUrl: 'https://www.youtube.com/embed/3dHNOWTI7H8', topicPdfUrl: 'https://gbihr.org/images/docs/test.pdf' }
      ]
    },
    {
      courseId: 2,
      courseName: 'Advanced Angular',
      instructorName: 'Jane Smith',
      level: 'Advanced',
      category: 'Frontend',
      isEnrolled:false,
      description: 'Advanced Angular concepts',
      videoUrl: 'https://www.youtube.com/embed/2OHbjep_WjQ',
      topics: [
        { topicId: 1, topicName: 'Change Detection', topicVideoUrl: 'https://www.youtube.com/embed/2OHbjep_WjQ' },
        { topicId: 2, topicName: 'Performance', topicVideoUrl: 'https://www.youtube.com/embed/2OHbjep_WjQ' }
      ]
    },
    {
      courseId: 3,
      courseName: 'JavaScript Essentials',
      instructorName: 'Alex Brown',
      level: 'Beginner',
      isEnrolled:false,
      category: 'Programming',
      description: 'JavaScript basics',
      videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
      topics: [
        { topicId: 1, topicName: 'Variables', topicVideoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk' }
      ]
    },
    {
      courseId: 4,
      courseName: 'TypeScript Mastery',
      instructorName: 'Emily Clark',
      isEnrolled:false,
      level: 'Intermediate',
      category: 'Programming',
      description: 'Learn TypeScript',
      videoUrl: 'https://www.youtube.com/embed/zQnBQ4tB3ZA',
      topics: [
        { topicId: 1, topicName: 'Types', topicVideoUrl: 'https://www.youtube.com/embed/zQnBQ4tB3ZA' }
      ]
    },
    {
      courseId: 5,
      courseName: 'UI Design Basics',
      instructorName: 'Mark Lee',
      isEnrolled:false,
      level: 'Intermediate',
      category: 'UI/UX',
      description: 'Design responsive UIs',
      videoUrl: 'https://www.youtube.com/embed/3JluqTojuME',
      topics: [
        { topicId: 1, topicName: 'Layouts', topicVideoUrl: 'https://www.youtube.com/embed/3JluqTojuME' }
      ]
    }
  ]);

  getCourses() {
    return this.courses$.asObservable();
  }

  getCourseById(id: number) {
    return this.courses$.value.find(c => c.courseId === id);
  }

  setCourses(courses: course[]) {
    this.courses$.next(courses);
  }
}
