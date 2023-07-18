import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RezervationComponent } from './rezervation/rezervation.component';
import { ReservationInquiryComponent } from './reservation-inquiry/reservation-inquiry.component';


const routes: Routes =[
  {
    path: '',
    component: HomeComponent


  },


  {
    path: 'hakkimizda', 
    component: InfoComponent

  },

  {
    path: 'rezervasyon',
    component: RezervationComponent

  },
    
  {
    path: 'rezervasyon-sorgulama',
    component: ReservationInquiryComponent
  }
    
  
]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
