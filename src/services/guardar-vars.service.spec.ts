import { TestBed } from '@angular/core/testing';

import { GuardarVarsService } from './guardar-vars.service';

describe('GuardarVarsService', () => {
  let service: GuardarVarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarVarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
