import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoomViewComponent } from './components/room-view/room-view.component';
import { HomeModule } from './components/home/home.module';
import { SingleRoomComponent } from './components/room-view/single-room/single-room.component';
import { RoomBookingComponent } from './components/room-booking/room-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RoomViewComponent,
    SingleRoomComponent,
    RoomBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
