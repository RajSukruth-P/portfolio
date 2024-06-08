import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
  ];
  
