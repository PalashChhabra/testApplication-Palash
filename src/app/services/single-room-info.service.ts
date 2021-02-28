import { Injectable } from '@angular/core';
import { SingleRoomData, singleRoomDataInterface } from './mock-data-single-room';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleRoomInfoService {

  constructor() { }

  public getSingleRoomData(): Observable<singleRoomDataInterface> {
    return of(SingleRoomData);
  }
}
