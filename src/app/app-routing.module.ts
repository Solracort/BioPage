import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path:'' , component:HomePageComponent, pathMatch:'full'},
  { path:'home' , component:HomePageComponent},
  { path:'languages' , component:LanguagesComponent},
  { path:'portfolio' , component:PortfolioComponent},
  { path:'contact' , component:ContactComponent},
  { path:'about_me' , component:AboutMeComponent},
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
