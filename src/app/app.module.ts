import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OtherActivityComponent } from './components/other-activity/other-activity.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    NavbarComponent,
    AboutComponent,
    FeaturesComponent,
    ActivitiesComponent,
    CoachesComponent,
    ContactUsComponent,
    OtherActivityComponent,
    GallaryComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
