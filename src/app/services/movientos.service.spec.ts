import { TestBed } from '@angular/core/testing';

import { MovientosService } from './movientos.service';

describe('MovientosService', () => {
  let service: MovientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
