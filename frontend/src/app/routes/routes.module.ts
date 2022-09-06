import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';
import { CoachesComponent } from './coaches/coaches.component';
import { PlayersComponent } from './players/players.component';
import { CourtsBookingComponent } from './courts-booking/courts-booking.component';
import { PlanningComponent } from './planning/planning.component';
import { CoursesBookingComponent } from './courses-booking/courses-booking.component';
import { ForumComponent } from './forum/forum.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MarkdownModule } from 'ngx-markdown';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesMgtComponent } from './courses-mgt/courses-mgt.component';
import { CoachesMgtComponent } from './coaches-mgt/coaches-mgt.component';
import { CourtsMgtComponent } from './courts-mgt/courts-mgt.component';
import { PlayersMgtComponent } from './players-mgt/players-mgt.component';
import { GuidelinesMgtComponent } from './guidelines-mgt/guidelines-mgt.component';
import { ForumMgtComponent } from './forum-mgt/forum-mgt.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    CoursesComponent,
    CoachesComponent,
    PlayersComponent,
    CourtsBookingComponent,
    PlanningComponent,
    CoursesBookingComponent,
    ForumComponent,
    MainComponent,
    GuidelinesComponent,
    NotFoundComponent,
    CourseDetailsComponent,
    CheckoutComponent,
    HomeComponent,
    DashboardComponent,
    CoursesMgtComponent,
    CoachesMgtComponent,
    CourtsMgtComponent,
    PlayersMgtComponent,
    GuidelinesMgtComponent,
    ForumMgtComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedModule,
    MarkdownModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoutesModule { }
