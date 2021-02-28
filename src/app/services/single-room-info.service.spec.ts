import { TestBed } from '@angular/core/testing';

import { SingleRoomInfoService } from './single-room-info.service';

describe('SingleRoomInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleRoomInfoService = TestBed.get(SingleRoomInfoService);
    expect(service).toBeTruthy();
  });
});
