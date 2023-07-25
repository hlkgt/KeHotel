import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './landing-page/layout/home/home.component';
import { AboutComponent } from './landing-page/layout/about/about.component';
import { PopularComponent } from './landing-page/layout/popuilar/popular.component';

import { AppStar } from './components/star-rating/star.component';
import { AppCard } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    AboutComponent,
    PopularComponent,
    AppStar,
    AppCard,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
