import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMoradoresComponent } from './visualizar-moradores.component';

describe('VisualizarMoradoresComponent', () => {
  let component: VisualizarMoradoresComponent;
  let fixture: ComponentFixture<VisualizarMoradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarMoradoresComponent]
    });
    fixture = TestBed.createComponent(VisualizarMoradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
