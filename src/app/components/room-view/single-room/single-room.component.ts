import { Component, AfterViewInit } from '@angular/core';
import { SingleRoomInfoService} from '../../../services/single-room-info.service';
import { singleRoomDataInterface } from "../../../services/mock-data-single-room";

@Component({
  selector: 'app-single-room',
  templateUrl: './single-room.component.html',
  styleUrls: ['./single-room.component.css']
})
export class SingleRoomComponent implements AfterViewInit{
  singleRoomDataInfo: singleRoomDataInterface;

  constructor(private singleRoomInfoService: SingleRoomInfoService) { 

    this.getData();
  }

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

  private getData(): void {
    this.singleRoomInfoService.getSingleRoomData().subscribe(data => { this.singleRoomDataInfo = data;});
  }

}
