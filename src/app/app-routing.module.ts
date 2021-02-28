import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RoomViewComponent } from './components/room-view/room-view.component';
import { HomeComponent } from './components/home/home.component';
import { SingleRoomComponent } from './components/room-view/single-room/single-room.component';
import { RoomBookingComponent } from './components/room-booking/room-booking.component';

const routes: Routes = [
  { path: 'roomview', component: RoomViewComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'singleroom', component: SingleRoomComponent },
  { path: 'booking', component: RoomBookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
