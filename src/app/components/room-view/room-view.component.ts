import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements AfterViewInit {

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
