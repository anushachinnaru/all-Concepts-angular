import { TestBed } from '@angular/core/testing';

import { ShareReplayService } from './share-replay.service';

describe('ShareReplayService', () => {
  let service: ShareReplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareReplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
