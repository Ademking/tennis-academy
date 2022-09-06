import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from '../shared/components/adminlayout/adminlayout.component';
import { UserlayoutComponent } from '../shared/components/userlayout/userlayout.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CoachesMgtComponent } from './coaches-mgt/coaches-mgt.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesMgtComponent } from './courses-mgt/courses-mgt.component';
import { CoursesComponent } from './courses/courses.component';
import { CourtsBookingComponent } from './courts-booking/courts-booking.component';
import { CourtsMgtComponent } from './courts-mgt/courts-mgt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumMgtComponent } from './forum-mgt/forum-mgt.component';
import { ForumComponent } from './forum/forum.component';
import { GuidelinesMgtComponent } from './guidelines-mgt/guidelines-mgt.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayersMgtComponent } from './players-mgt/players-mgt.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  {
    path: 'admin', component: AdminlayoutComponent, data: { expectedRole: ['admin'] }, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'courses', component: CoursesMgtComponent },
      { path: 'coaches', component: CoachesMgtComponent },
      { path: 'courts', component: CourtsMgtComponent },
      { path: 'players', component: PlayersMgtComponent },
      { path: 'guidelines', component: GuidelinesMgtComponent },
      { path: 'forum', component: ForumMgtComponent },
    ]
  },
  {
    path: 'user',
    component: UserlayoutComponent,  data: { expectedRole: ['admin', 'player', 'coach'] }, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MainComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: CourseDetailsComponent },
      { path: 'courses/:id/checkout', component: CheckoutComponent },
      { path: 'coaches', component: CoachesComponent },
      { path: 'courts', component: CourtsBookingComponent },
      { path: 'guidelines', component: GuidelinesComponent },
      { path: 'forum', component: ForumComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: true})],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
