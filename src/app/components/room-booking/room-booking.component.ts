import { Component, AfterViewInit } from '@angular/core';
import {COUNTRIES} from './country-list';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements AfterViewInit {
  countries = COUNTRIES;
  constructor() { }

  async ngAfterViewInit() {
    await this.loadScript('../assets/js/main.js');
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptUrl;
    scriptElement.onload = resolve;
    document.body.appendChild(scriptElement);
   });
  }

}
