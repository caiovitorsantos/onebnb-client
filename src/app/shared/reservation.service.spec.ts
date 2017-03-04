/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReservationService } from './reservation.service';

describe('ReservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationService]
    });
  });

  it('should ...', inject([ReservationService], (service: ReservationService) => {
    expect(service).toBeTruthy();
  }));
});
