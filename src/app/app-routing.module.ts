import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { EnrolledCourseComponent } from './enrolled-course/enrolled-course.component';

const routes: Routes = [
  {path:'', component:CourseListComponent},
  { path: 'view-course/:id', component: ViewCourseComponent },
  { path: 'enrolled-course', component: EnrolledCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
