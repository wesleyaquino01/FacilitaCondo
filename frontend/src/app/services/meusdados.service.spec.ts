import { TestBed } from '@angular/core/testing';

import { MeusdadosService } from './meusdados.service';

describe('MeusdadosService', () => {
  let service: MeusdadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeusdadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
