import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { WieKannComponent } from './components/pages/wie-kann/wie-kann.component';
import { AboutComponent } from './components/about/about.component';
import { WerrKannComponent } from './components/pages/werr-kann/werr-kann.component';
import { DayCourseComponent } from './components/pages/day-course/day-course.component';
import { GesprComponent } from './components/pages/gespr/gespr.component';
import { AgbComponent } from './components/pages/agb/agb.component';
import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { TerminComponent } from './components/pages/termin/termin.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'agb', component: AgbComponent },
  // { path: 'application', component: ApplicationFormComponent },
  //{ path: 'about', component: AboutComponent },
  { path: 'ges', component: GesprComponent },
  { path: 'day-course', component: DayCourseComponent },
  { path: 'termin', component: TerminComponent },
  { path: 'wer-kann', component: WerrKannComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wie-kann', component: WieKannComponent },
  { path: 'application', component: ApplicationFormComponent },
  { path: 'termin', component: TerminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
