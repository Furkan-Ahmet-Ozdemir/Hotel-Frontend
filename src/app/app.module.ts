import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SpecsComponent } from './specs/specs.component';
import { AboutRoomComponent } from './about-room/about-room.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RezervationComponent } from './rezervation/rezervation.component';
import { HomeComponent } from './home/home.component';
import { ReservationQueryComponent } from './reservation-query/reservation-query.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationPopupComponent } from './reservation-popup/reservation-popup.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationQueryService} from "./reservation-inquiry.service";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'hakkimizda', component: InfoComponent } // Yeni rota tanımı
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    SpecsComponent,
    AboutRoomComponent,
    FooterComponent,
    InfoComponent,
    ContactComponent,
    RezervationComponent,
    HomeComponent,
    ReservationQueryComponent,
    RoomsComponent,
    ReservationPopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [ReservationQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
