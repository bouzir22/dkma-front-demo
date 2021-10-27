import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/landing-parts/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { SlegonComponent } from './components/landing-parts/slegon/slegon.component';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/landing-parts/main/main.component';
import { AgbComponent } from './components/pages/agb/agb.component';
import { DayCourseComponent } from './components/pages/day-course/day-course.component';
import { GesprComponent } from './components/pages/gespr/gespr.component';
import { TerminComponent } from './components/pages/termin/termin.component';
import { AboutComponent } from './components/about/about.component';
import { WieKannComponent } from './components/pages/wie-kann/wie-kann.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    SlegonComponent,
    LandingComponent,
    MainComponent,
    AgbComponent,
    DayCourseComponent,
    GesprComponent,
    TerminComponent,
    AboutComponent,
    WieKannComponent,
    ApplicationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
