import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './Home/Home/home.component';
import { HeaderOneComponent } from './common/header-one/header-one.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderTwoComponent } from './common/header-two/header-two.component';
import { AboutAreaComponent } from './common/about-area/about-area.component';
import { BrandAreaComponent } from './common/brand-area/brand-area.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { CourseGridComponent } from './common/course-grid/course-grid.component';
import { CourseListComponent } from './common/course-list/course-list.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { CourseSidebarMainComponent } from './course-sidebar/course-sidebar-main/course-sidebar-main.component';
import { CourseSidebarAreaComponent } from './course-sidebar/course-sidebar-area/course-sidebar-area.component';
import { RelatedCourseComponent } from './common/related-course/related-course.component';
import { CourseDetailsComponent } from './course-details/course-details-main/course-details.component';
import { CourseDetailsAreaComponent } from './course-details/course-details-area/course-details-area.component';
import { BlogSidebarComponent } from './common/blog-sidebar/blog-sidebar.component';
import { SignInMainComponent } from './sign-in/sign-in-main/sign-in-main.component';
import { SignInAreaComponent } from './sign-in/sign-in-area/sign-in-area.component';
import { SignUpMainComponent } from './sign-up/sign-up-main/sign-up-main.component';
import { SignUpAreaComponent } from './sign-up/sign-up-area/sign-up-area.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeroAreaComponent } from './Home/hero-area/hero-area.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderOneComponent,
    FooterComponent,
    HeaderTwoComponent,
    HeroAreaComponent,
    AboutAreaComponent,
    BrandAreaComponent,
    BreadcrumbComponent,
    CourseGridComponent,
    CourseListComponent,
    PaginationComponent,
    CourseSidebarMainComponent,
    CourseSidebarAreaComponent,
    RelatedCourseComponent,
    CourseDetailsComponent,
    CourseDetailsAreaComponent,
    BlogSidebarComponent,
    SignInMainComponent,
    SignInAreaComponent,
    SignUpMainComponent,
    SignUpAreaComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    SwiperModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EducalModule { }
