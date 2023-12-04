import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarMoradorComponent } from './cadastar-morador.component';

describe('CadastarMoradorComponent', () => {
  let component: CadastarMoradorComponent;
  let fixture: ComponentFixture<CadastarMoradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastarMoradorComponent]
    });
    fixture = TestBed.createComponent(CadastarMoradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
