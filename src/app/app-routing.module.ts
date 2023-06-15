import { CoachesComponent } from './components/coaches/coaches.component';
import { OffersComponent } from './components/offers/offers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'coaches', component: CoachesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
